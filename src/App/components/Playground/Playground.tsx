import { javascript } from '@codemirror/lang-javascript';
import { githubDark } from '@uiw/codemirror-theme-github';
import CodeMirror from '@uiw/react-codemirror';
import { WebContainer } from '@webcontainer/api';
import debounce from 'lodash/debounce';
import { useCallback, useEffect, useState } from 'react';

import { CompiledCode } from '../../../Code/CompiledCode';
import { Heading } from '../../../Typography/Heading';
import Text from '../../../Typography/Text';
import { Columns, Stack } from '../../../system';

import { files } from './playgroundFiles';

async function installDependencies(webcontainer: WebContainer) {
  // Install dependencies
  const installProcess = await webcontainer.spawn('pnpm', ['install']);

  installProcess.output.pipeTo(
    new WritableStream({
      write(data) {
        console.log(data);
      },
    }),
  );

  // Wait for install command to exit
  return installProcess.exit;
}

const bootstrapWebcontainer = async () => {
  const instance = await WebContainer.boot();
  await instance.mount(files);

  const installExitCode = await installDependencies(instance);
  if (installExitCode !== 0) {
    console.log('Error installing deps');
    return;
  }

  return instance;
};

const runBuild = async (webcontainer: WebContainer) => {
  const buildProcess = await webcontainer.spawn('pnpm', ['start']);
  buildProcess.output.pipeTo(
    new WritableStream({
      write(data) {
        console.log('[build]:', data);
      },
    }),
  );
  return buildProcess.exit;
};

const buildAndUpdate = async (webcontainer: WebContainer) => {
  const buildExitCode = await runBuild(webcontainer);
  if (buildExitCode !== 0) {
    console.log('Build failed');
    return;
  }

  // const dirResult = await webcontainer.fs.readdir('dist', {
  //   encoding: 'utf-8',
  // });

  const cssContent = await webcontainer.fs.readFile(
    'dist/styles.css.css',
    'utf-8',
  );

  return cssContent;
};

export const Playground = () => {
  const [webcontainer, setWebcontainer] = useState<WebContainer | null>(null);
  const [cssContents, setCssContents] = useState('');
  const [fileContents, setFileContents] = useState(
    files['styles.css.ts'].file.contents,
  );

  useEffect(() => {
    bootstrapWebcontainer().then(async (instance) => {
      if (instance) {
        setWebcontainer(instance);
        const css = await buildAndUpdate(instance);
        if (css) {
          setCssContents(css);
        }
      }
    });
  }, []);

  if (!webcontainer) {
    return <Text>Loading web container...</Text>;
  }

  const handleCodeChange = async (content: string) => {
    setFileContents(content);
    await webcontainer.fs.writeFile('styles.css.ts', content);
    const css = await buildAndUpdate(webcontainer);
    if (css) {
      setCssContents(css);
    }
  };

  const debouncedChangeHandler = debounce(handleCodeChange, 500);

  return (
    <Columns space="medium" alignY="stretch">
      <Stack space="large">
        <Heading level="4">Vanilla Extract</Heading>
        <CodeMirror
          value={fileContents}
          height="600px"
          theme={githubDark}
          extensions={[javascript({ typescript: true })]}
          onChange={debouncedChangeHandler}
        />
      </Stack>

      <Stack space="large">
        <Heading level="4">Compiled CSS</Heading>
        <CompiledCode
          code={[
            {
              fileName: 'styles.css',
              contents: cssContents,
            },
          ]}
          css={{
            'styles.css': cssContents,
          }}
        />
        {/* <CodeMirror
          value={cssContents}
          height="600px"
          theme={githubDark}
          readOnly
          editable={false}
          basicSetup={{ highlightActiveLine: false }}
          extensions={[javascript({ typescript: true })]}
        /> */}
      </Stack>
    </Columns>
  );
};

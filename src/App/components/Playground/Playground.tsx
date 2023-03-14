import { javascript } from '@codemirror/lang-javascript';
import { githubDark } from '@uiw/codemirror-theme-github';
import CodeMirror from '@uiw/react-codemirror';
import { WebContainer } from '@webcontainer/api';
import debounce from 'lodash/debounce';
import { useEffect, useState } from 'react';

import { CompiledCode } from '@/Code/CompiledCode';
import { Box } from '@/system';

import { PlaygroundLoader } from './components/PlaygroundLoader/PlaygroundLoader';
import { files } from './playgroundFiles';

import * as styles from './Playground.css';

async function installDependencies(webcontainer: WebContainer) {
  // Install dependencies
  const installProcess = await webcontainer.spawn('pnpm', ['install']);

  installProcess.output.pipeTo(
    new WritableStream({
      write(data) {
        // eslint-disable-next-line no-console
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
    // eslint-disable-next-line no-console
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
        // eslint-disable-next-line no-console
        console.log('[build]:', data);
      },
    }),
  );
  return buildProcess.exit;
};

const buildAndUpdate = async (webcontainer: WebContainer) => {
  const buildExitCode = await runBuild(webcontainer);
  if (buildExitCode !== 0) {
    // eslint-disable-next-line no-console
    console.log('Build failed');
    return;
  }

  // const dirResult = await webcontainer.fs.readdir('dist', {
  //   encoding: 'utf-8',
  // });

  const rawCssContent = await webcontainer.fs.readFile(
    'dist/styles.css.css',
    'utf-8',
  );

  // Remove the comments that esbuild adds to the bundle
  const cssContent = rawCssContent.replace(/^\/\*.*\*\/\n?/, '');

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

  const handleCodeChange = async (content: string) => {
    if (!webcontainer) {
      return;
    }

    setFileContents(content);
    await webcontainer.fs.writeFile('styles.css.ts', content);
    const css = await buildAndUpdate(webcontainer);
    if (css) {
      setCssContents(css);
    }
  };

  const debouncedChangeHandler = debounce(handleCodeChange, 500);

  return (
    <Box display="flex" alignItems="stretch" flexGrow={1}>
      <Box
        style={{ width: '100%', minWidth: 0 }}
        display="flex"
        alignItems="stretch"
        flexDirection="column"
      >
        <CodeMirror
          value={fileContents}
          className={styles.codemirrorEditor}
          height="100%"
          theme={githubDark}
          extensions={[javascript({ typescript: true })]}
          onChange={debouncedChangeHandler}
        />
      </Box>
      <Box
        className={styles.compiledCodeBackground}
        style={{ width: '100%', minWidth: 0 }}
        marginLeft="medium"
      >
        {webcontainer && cssContents ? (
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
        ) : (
          <PlaygroundLoader />
        )}
      </Box>
    </Box>
  );
};

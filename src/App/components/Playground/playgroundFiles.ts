import type { FileSystemTree } from '@webcontainer/api';

export const files = {
  'build.js': {
    file: {
      contents: `
import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin';
import esbuild from 'esbuild';

console.log('BUILDING');

await esbuild
  .build({
    entryPoints: ['styles.css.ts'],
    bundle: true,
    format: 'esm',
    outdir: 'dist',
    plugins: [vanillaExtractPlugin()],
  })
  .catch(() => process.exit(1));`,
    },
  },
  'styles.css.ts': {
    file: {
      contents: `import { style } from '@vanilla-extract/css';

export const testStyle = style({
  background: 'papayawhip',
});
`,
    },
  },
  'package.json': {
    file: {
      contents: `
{
  "name": "vanilla-extract-playground-app",
  "type": "module",
  "dependencies": {
    "@vanilla-extract/css": "^1.9.5",
    "@vanilla-extract/esbuild-plugin": "^2.2.1",
    "esbuild": "^0.17.8"
  },
  "scripts": {
    "start": "node build.js"
  }
}`,
    },
  },
} satisfies FileSystemTree;

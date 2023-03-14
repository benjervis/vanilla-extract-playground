import { fallbackVar, style } from '@vanilla-extract/css';

import { darkModeBg } from './components/PlaygroundLoader/PlaygroundLoader.css';
import { darkMode } from '@/system/styles/sprinkles.css';
import { vars } from '@/themes.css';

export const codemirrorEditor = style({
  flexGrow: 1,
});

export const compiledCodeBackground = style({
  selectors: {
    [`.${darkMode} &::before`]: {
      background: fallbackVar(darkModeBg, vars.palette.gray900),
    },
  },
});

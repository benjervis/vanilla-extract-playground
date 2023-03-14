import { createVar, fallbackVar, keyframes, style } from '@vanilla-extract/css';

import { sprinkles } from '@/system/styles/sprinkles.css';
import { vars } from '@/themes.css';

export const darkModeBg = createVar();
export const lightModeBg = createVar();

export const root = style([
  sprinkles({ position: 'relative', zIndex: 0 }),
  {
    height: '100%',
    '::before': {
      content: '""',
      position: 'absolute',
      background: fallbackVar(lightModeBg, vars.palette.blue50),
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: -1,
      transform: 'skewX(-1deg) skewY(0.75deg)',
    },
  },
]);

export const skewed = style({
  transform: 'skew(15deg)',
});

const rotate = keyframes({
  '0%': { transform: 'rotate(0deg) skew(15deg)' },
  '80%': { transform: 'rotate(720deg) skew(15deg)' },
  '100%': { transform: 'rotate(720deg) skew(15deg)' },
});

export const spinner = style({
  animationName: rotate,
  animationTimingFunction: 'ease-in-out',
  animationDuration: '2s',
  animationIterationCount: 'infinite',

  height: 29,
  transform: 'skew(15deg)',
});

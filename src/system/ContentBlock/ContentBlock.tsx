import type { ReactNode } from 'react';

import { Box } from '../';
import type { BoxProps } from '../Box/Box';

import * as styles from './ContentBlock.css';

export const ContentBlock = ({
  children,
  withGutters = false,
  size = 'standard',
}: {
  children: ReactNode;
  withGutters?: boolean;
  size?: BoxProps['maxWidth'];
}) => (
  <Box
    maxWidth={size}
    className={styles.root}
    paddingX={
      withGutters
        ? { mobile: 'large', tablet: 'xlarge', desktop: 'xxlarge' }
        : undefined
    }
  >
    {children}
  </Box>
);

import React from 'react';

import * as styles from './PlaygroundLoader.css';

import { Heading } from '@/Typography/Heading';
import { Box } from '@/system';

export const PlaygroundLoader = () => (
  <Box
    className={styles.root}
    display="flex"
    justifyContent="center"
    paddingY="xlarge"
  >
    <Box
      position="relative"
      component="span"
      display="block"
      marginTop="xxlarge"
      paddingLeft="large"
    >
      <Box
        component="span"
        display="block"
        position="absolute"
        top={0}
        left={0}
        paddingLeft="xsmall"
        marginTop="-small"
        borderRadius="medium"
        background={{ lightMode: 'pink400', darkMode: 'pink500' }}
        className={styles.spinner}
      />
      <Heading component="span" level="4">
        Loading playground...
      </Heading>
    </Box>
  </Box>
);

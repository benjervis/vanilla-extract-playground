import { Box, Columns, ContentBlock, Stack } from '@/system';

import { ColorModeProvider } from '../ColorModeToggle/ColorModeToggle';
import { Heading } from '../Typography/Heading';

import { Playground } from './components/Playground/Playground';

import './App.css';

export const App = () => (
  <ColorModeProvider>
    <ContentBlock size="xlarge">
      <Box style={{ height: '100vh' }} display="flex" flexDirection="column">
        <Box
          paddingTop="xlarge"
          flexGrow={0}
          id="growbox-0"
          paddingBottom="large"
        >
          <Stack space="xxlarge">
            <Heading level="1">Playground</Heading>
            <Columns space="medium" alignY="stretch">
              <Heading level="4">Vanilla Extract</Heading>
              <Heading level="4">Compiled CSS</Heading>
            </Columns>
          </Stack>
        </Box>

        <Box flexGrow={1} id="growbox-1" display="flex">
          <Playground />
        </Box>
      </Box>
      <Box paddingBottom="medium" flexGrow={0} />
    </ContentBlock>
  </ColorModeProvider>
);

import { ColorModeProvider } from '../ColorModeToggle/ColorModeToggle';
import { Heading } from '../Typography/Heading';
import { Box, ContentBlock, Stack } from '../system';

import './App.css';
import { Playground } from './components/Playground/Playground';

export const App = () => (
  <ColorModeProvider>
    <ContentBlock size="xlarge">
      <Stack space="xxlarge">
        <Box paddingTop="xlarge">
          <Heading level="1">Playground</Heading>
        </Box>
        <Playground />
      </Stack>
    </ContentBlock>
  </ColorModeProvider>
);

import '@/styles/globals.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import type { AppProps } from 'next/app';

const breakpoints = {
  '2xl': '1919px',
  xl: '1440px',
  lg: '1056px',
};
const theme = extendTheme({ breakpoints });

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default App;

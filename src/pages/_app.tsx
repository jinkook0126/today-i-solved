import Fonts from '@/styles/fonts';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import theme from '../theme';

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme} toastOptions={{ defaultOptions: { position: 'top-right' } }}>
    <Fonts />
    <Component {...pageProps} />
  </ChakraProvider>
);

export default App;

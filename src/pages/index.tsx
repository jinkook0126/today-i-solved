import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Header from '@/components/layout/Header';

const Home = () => (
  <Box minH='100vh' backgroundColor='gray.50'>
    <Head>
      <title>TIS</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Header />
  </Box>
);

export default Home;

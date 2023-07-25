import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { Box } from '@chakra-ui/react';

const inter = Inter({ subsets: ['latin'] });

const Home = () => (
  <Box minH='100vh' backgroundColor={'gray.50'}>
    <Head>
      <title>TIS</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
  </Box>
);

export default Home;

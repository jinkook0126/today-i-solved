import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Header from '@/components/layout/header';
import OverlayHeader from './overlayHeader';

type Props = {
  children: React.ReactNode;
};

const ServiceLayout = ({ children }: Props) => {
  return (
    <Box minH='100vh' backgroundColor='gray.50'>
      <Head>
        <title>TIS</title>
      </Head>
      <Header />
      <OverlayHeader />
      {children}
    </Box>
  );
};

export default ServiceLayout;

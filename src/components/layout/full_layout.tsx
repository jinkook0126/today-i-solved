import Head from 'next/head';
import { Box } from '@chakra-ui/react';

type Props = {
  children: React.ReactNode;
};

const WriteLayout = ({ children }: Props) => {
  return (
    <Box minH='100vh'>
      <Head>
        <title>TIS</title>
      </Head>
      {children}
    </Box>
  );
};

export default WriteLayout;

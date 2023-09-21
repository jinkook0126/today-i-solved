import WriteLayout from '@/components/layout/write_layout';
import { Box, Text, Heading } from '@chakra-ui/react';
import { NextPage } from 'next';
interface PageProps {}

const Write: NextPage<PageProps> = () => {
  return (
    <WriteLayout>
      <Box></Box>
    </WriteLayout>
  );
};

export default Write;

import ServiceLayout from '@/components/layout/service_layout';
import { Box, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
interface PageProps {}

const Tmp: NextPage<PageProps> = () => {
  return (
    <ServiceLayout>
      <Box>
        <Text>여기는 잠깐 페이지 입니다.!!</Text>
      </Box>
    </ServiceLayout>
  );
};

export default Tmp;

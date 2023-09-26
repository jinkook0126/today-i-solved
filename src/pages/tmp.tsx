import ServiceLayout from '@/components/layout/service_layout';
import { Box, Text, Heading } from '@chakra-ui/react';
import { NextPage } from 'next';
interface PageProps {}

const Tmp: NextPage<PageProps> = () => {
  return (
    <ServiceLayout>
      <Box>
        <Text fontWeight={'700'} fontSize={40}>
          진짜 깔끔하고 예쁜 고딕이다
        </Text>
        <Text fontWeight={'400'} fontSize={40}>
          진짜 깔끔하고 예쁜 고딕이다
        </Text>
        <Text fontWeight={'300'} fontSize={40}>
          진짜 깔끔하고 예쁜 고딕이다
        </Text>
        <Text fontSize={40}>진짜 깔끔하고 예쁜 고딕이다</Text>
        <Text as='b' fontSize={40}>
          진짜 깔끔하고 예쁜 고딕이다
        </Text>
      </Box>
      <Box h={20} backgroundColor={'red'} />
      <Box>
        <Heading fontSize={40}>가나다라마바사</Heading>
      </Box>
    </ServiceLayout>
  );
};

export default Tmp;

import { GetServerSideProps, NextPage } from 'next';
import ServiceLayout from '@/components/layout/service_layout';
import { Center, Text, Box, Flex } from '@chakra-ui/react';
import { Post } from '@/models/card';
import Card from '@/components/layout/card';

interface IndexProps {
  name: string;
  posts: Post[];
}
const IndexPage: NextPage<IndexProps> = props => {
  const { posts } = props;
  return (
    <ServiceLayout>
      <Center h={240} bg={'teal.100'}>
        <Text fontWeight={'bold'} fontSize={30}>
          검색 영역
        </Text>
      </Center>
      <Box w={{ base: 'calc(100% - 2rem)', '2xl': '1728px', xl: '1376px', lg: '1024px' }} marginX='auto'>
        <Flex mt={'2rem'}>
          <Box flexBasis={'0%'} flexGrow={1} flexShrink={1}>
            <Flex wrap={'wrap'} m={'-1rem'}>
              {posts.map(post => {
                return <Card post={post} />;
              })}
            </Flex>
          </Box>
        </Flex>
      </Box>
    </ServiceLayout>
  );
};

export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/albums');
  const jsonData = await response.json();
  const posts: Post[] = jsonData;
  return {
    props: {
      name: 'jinkook',
      posts,
    },
  };
};

export default IndexPage;

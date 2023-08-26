import { GetServerSideProps, NextPage } from 'next';
import ServiceLayout from '@/components/layout/service_layout';
import { Center, Text, Box, Flex } from '@chakra-ui/react';

interface Post {
  id: number;
  title: string;
}
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
        <Flex wrap={'wrap'}>
          {posts.map(post => {
            return (
              <Box boxShadow={'tis'} key={post.id} m={'16px'} borderRadius={4} bg={'white'} h={377} flex={1}>
                <Text fontWeight={300}>{post.title}</Text>
              </Box>
            );
          })}
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

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
        <Flex mt={'2rem'}>
          <Box flexBasis={'0%'} flexGrow={1} flexShrink={1}>
            <Flex wrap={'wrap'} m={'-1rem'}>
              {posts.map(post => {
                return (
                  <Flex
                    _hover={{
                      transform: 'translateY(-8px)',
                      boxShadow: 'tis_hover',
                    }}
                    transitionDelay={'0s, 0s'}
                    transitionTimingFunction={'ease-in, ease-in'}
                    transitionProperty={'box-shadow, transform'}
                    transitionDuration={'0.25s, 0.25s'}
                    cursor={'pointer'}
                    boxShadow={'tis'}
                    key={post.id}
                    m={'1rem'}
                    borderRadius={4}
                    bg={'white'}
                    h={377}
                    w={'20rem'}
                  >
                    <Text w={'100%'} fontWeight={300}>
                      {post.title}
                    </Text>
                  </Flex>
                );
              })}
            </Flex>
          </Box>
        </Flex>
        {/* <Flex wrap={'wrap'} grow={1} basis={'0%'} shrink={1}>
          {posts.map(post => {
            return (
              <Box
                _hover={{
                  transform: 'translateY(-8px)',
                  boxShadow: 'tis_hover',
                }}
                transitionDelay={'0s, 0s'}
                transitionTimingFunction={'ease-in, ease-in'}
                transitionProperty={'box-shadow, transform'}
                transitionDuration={'0.25s, 0.25s'}
                cursor={'pointer'}
                boxShadow={'tis'}
                key={post.id}
                m={'16px'}
                borderRadius={4}
                bg={'white'}
                h={377}
                w={'20rem'}
              >
                <Text fontWeight={300}>{post.title}</Text>
              </Box>
            );
          })}
        </Flex> */}
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

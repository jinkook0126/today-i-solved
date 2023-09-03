import { Post } from '@/models/card';
import { Flex, Text } from '@chakra-ui/react';

interface Props {
  post: Post;
}

const Card = ({ post }: Props) => {
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
      w={{
        base: '100%',
        md: 'calc(50% - 2rem)',
        lg: '20rem',
      }}
    >
      <Text w={'100%'} fontWeight={300}>
        {post.title}
      </Text>
    </Flex>
  );
};

export default Card;

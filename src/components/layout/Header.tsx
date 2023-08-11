import { Flex, Text, Button } from '@chakra-ui/react';

const Header = () => (
  <Flex
    w={{ base: 'calc(100% - 2rem)', '2xl': '1728px', xl: '1376px', lg: '1024px' }}
    h='64px'
    backgroundColor='blue.200'
    marginX='auto'
    direction='row'
    alignItems='center'
    justifyContent='space-between'
  >
    <Text as='b' fontSize='3xl'>
      Today I Solved
    </Text>
    <Button colorScheme='teal'>로그아웃</Button>
  </Flex>
);

export default Header;

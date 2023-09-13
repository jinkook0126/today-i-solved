import { Flex, Button } from '@chakra-ui/react';
import Logo from './logo';

const Header = () => (
  <Flex
    w={{ base: 'calc(100% - 2rem)', '2xl': '1728px', xl: '1376px', lg: '1024px' }}
    h='4rem'
    marginX='auto'
    direction='row'
    alignItems='center'
    justifyContent='space-between'
  >
    <Logo width={220} />
    <Button colorScheme='teal' variant='ghost'>
      로그인
    </Button>
  </Flex>
);

export default Header;

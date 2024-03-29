import { Flex, Button, useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Logo from './logo';
import LoginModal from '../login/loginModal';

const Header = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      w={{ base: 'calc(100% - 2rem)', '2xl': '1728px', xl: '1376px', lg: '1024px' }}
      h='4rem'
      marginX='auto'
      direction='row'
      alignItems='center'
      justifyContent='space-between'
    >
      <Logo width={220} />
      <Flex>
        <Button colorScheme='teal' variant='outline' onClick={() => router.push('/write')}>
          새 글 작성
        </Button>
        <Button colorScheme='teal' variant='ghost' onClick={onOpen}>
          로그인
        </Button>
      </Flex>
      <LoginModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default Header;

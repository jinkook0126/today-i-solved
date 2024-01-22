import { useState } from 'react';
import {
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  Text,
  IconButton,
  Input,
  Box,
  Button,
  useToast,
  Link,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { SubmitHandler, useForm } from 'react-hook-form';
import GithubSvg from '/public/assets/login/github.svg';
import GoogleSvg from '/public/assets/login/google.svg';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  email: string;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const toast = useToast();
  const [isLogin, setIsLogin] = useState(true);
  const label = isLogin ? '로그인' : '회원가입';
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = ({ email }) => {
    const regExp = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    if (email === '' || !regExp.test(email)) {
      toast({
        description: '잘못된 이메일 형식입니다.',
        status: 'error',
        duration: 3000,
        isClosable: true,
        variant: 'subtle',
      });
      return;
    }
    alert('do Login');
  };
  return (
    <Modal closeOnOverlayClick={false} isCentered motionPreset='slideInBottom' isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent w={390} h={530} p={'1.5rem'}>
        <Flex justifyContent='flex-end' mb='2.25rem'>
          <IconButton
            onClick={onClose}
            size={'xs'}
            variant='unstyled'
            aria-label='Close'
            icon={<CloseIcon color={'gray.500'} />}
          />
        </Flex>
        <Flex direction='column' justifyContent={'space-between'} flexGrow={1}>
          <Box>
            <Text as='h2' fontSize='1.3125rem' fontWeight='bold'>
              {label}
            </Text>
            <Box>
              <Text as='h4' fontSize='sm' marginY='1rem' fontWeight='bold' color='gray.500'>
                이메일로 {label}
              </Text>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Flex h={'3rem'}>
                  <Input
                    {...register('email')}
                    placeholder='이메일을 입력하세요'
                    borderRadius='0'
                    borderTopLeftRadius='2px'
                    borderBottomLeftRadius='2px'
                    fontSize='1rem'
                    borderTopWidth='1px'
                    borderLeftWidth='1px'
                    borderBottomWidth='1px'
                    p='16px'
                  />
                  <Button
                    type='submit'
                    size='md'
                    width='102px'
                    fontSize='14px'
                    borderRadius='0'
                    colorScheme='teal'
                    borderTopRightRadius='2px'
                    borderBottomRightRadius='2px'
                  >
                    {label}
                  </Button>
                </Flex>
              </form>
            </Box>
            <Box mt='40px'>
              <Text as='h4' fontSize='sm' marginY='1rem' fontWeight='bold' color='gray.500'>
                소셜 계정으로 {label}
              </Text>
              <Flex mt='24px' direction='row' alignItems='center' justifyContent='space-around'>
                <Link
                  href='#'
                  w='3rem'
                  h='3rem'
                  borderRadius='1.5rem'
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  bg='rgb(39, 46, 51)'
                  color='white'
                  _hover={{
                    boxShadow: 'circle_shadow',
                  }}
                  transitionDelay={'0s'}
                  transitionTimingFunction={'ease-in'}
                  transitionProperty={'box-shadow'}
                  transitionDuration={'0.125s'}
                >
                  <GithubSvg width='20px' height='20px' />
                </Link>
                <Link
                  href='#'
                  w='3rem'
                  h='3rem'
                  borderRadius='1.5rem'
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  bg='white'
                  color='white'
                  borderWidth='1px'
                  borderColor={'gray.100'}
                  _hover={{
                    boxShadow: 'circle_shadow',
                  }}
                  transitionDelay={'0s'}
                  transitionTimingFunction={'ease-in'}
                  transitionProperty={'box-shadow'}
                  transitionDuration={'0.125s'}
                >
                  <GoogleSvg width='20px' height='20px' />
                </Link>
              </Flex>
            </Box>
          </Box>
          <Flex direction='row' justifyContent='flex-end'>
            <Text fontSize='xs' mr='0.25rem'>
              {isLogin ? '아직 회원이 아니신가요?' : '계정이 이미 있으신가요?'}
            </Text>
            <Box
              onClick={() => setIsLogin(!isLogin)}
              _hover={{ textDecoration: 'underline' }}
              cursor='pointer'
              color='teal.500'
              fontWeight='bold'
              fontSize='xs'
            >
              회원가입
            </Box>
          </Flex>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default LoginModal;

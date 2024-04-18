import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
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
  Icon,
} from '@chakra-ui/react';
import { CloseIcon, CheckIcon } from '@chakra-ui/icons';

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
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(true);
  const [isRequest, setIsRequest] = useState(false);
  const label = isLogin ? '로그인' : '회원가입';
  const { register, handleSubmit, reset } = useForm<FormData>();

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
    if (isLogin) {
      alert(`do Login with ${email}`);
      return;
    }
    alert(`do SignUp with ${email}`);
    setIsRequest(true);
  };

  useEffect(() => {
    return () => {
      reset();
      setIsLogin(true);
      setIsRequest(false);
    };
  }, [isOpen]);
  return (
    <Modal
      size={{ base: 'full', md: 'md' }}
      closeOnOverlayClick={false}
      isCentered
      motionPreset='scale'
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent p='1.5rem' minH='530px'>
        <Flex justifyContent='flex-end' mb='2.25rem'>
          <IconButton
            onClick={onClose}
            size='xs'
            variant='unstyled'
            aria-label='Close'
            icon={<CloseIcon color='gray.500' />}
          />
        </Flex>
        <Flex direction='column' justifyContent='space-between' flexGrow={1}>
          <Box>
            <Text as='h2' fontSize='1.3125rem' fontWeight='bold'>
              {label}
            </Text>
            <Box>
              <Text as='h4' fontSize='sm' marginY='1rem' fontWeight='bold' color='gray.500'>
                이메일로 {label}
              </Text>
              {isRequest ? (
                <Flex
                  h='3rem'
                  borderWidth='1px'
                  borderColor={'teal.200'}
                  bg='teal.100'
                  px='0.75rem'
                  alignItems='center'
                >
                  <Icon as={CheckIcon} w='16px' h='16px' color='green.600' />
                  <Text as='h4' fontSize='0.875rem' flex={1} color='green.600' textAlign='center'>
                    회원가입 링크가 이메일로 전송되었습니다.
                  </Text>
                </Flex>
              ) : (
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
              )}
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
                  href={`http://localhost:3010/auth/social/redirect/google?next=${router.pathname}`}
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
            <Text fontSize='sm' mr='0.25rem'>
              {isLogin ? '아직 회원이 아니신가요?' : '계정이 이미 있으신가요?'}
            </Text>
            <Box
              onClick={() => setIsLogin(!isLogin)}
              _hover={{ textDecoration: 'underline' }}
              cursor='pointer'
              color='teal.500'
              fontWeight='bold'
              fontSize='sm'
            >
              {isLogin ? '회원가입' : '로그인'}
            </Box>
          </Flex>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default LoginModal;
// https://github.com/login?
// client_id=7c3902d881910d52ae3e&
// return_to=%2Flogin%2Foauth%2Fauthorize%3Fclient_id%3D7c3902d881910d52ae3e%26integrateState%3D%26isIntegrate%3D0%26redirect_uri%3
// Dhttps%253A%252F%252Fv2.velog.io%252Fapi%252Fv2%252Fauth%252Fsocial%252Fcallback%252Fgithub%253Fnext%253D%252F%2540kyleryu%252F%25EA%25B0%259C%25EB%25B0%259C%25EC%259E%2590%25EA%25B0%2580-100%25EC%2596%25B5%25EC%259D%2584-%25EB%25B2%2584%25EB%258A%2594-%25EA%25B0%2580%25EC%259E%25A5-%25EB%25B9%25A0%25EB%25A5%25B8-%25EB%25B0%25A9%25EB%25B2%2595%26scope%3Duser%253Aemail

import { NextPage } from 'next';
import { Box, Text, Flex, Button, Checkbox, Link } from '@chakra-ui/react';
import RegisterInput from '@/components/register/registerInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSocialProfile, SocialProfile } from '@/utils/auth';
import axiosInstance from '@/utils/axiosInstance';
interface PageProps {}

interface FormData {
  username: string;
  email: string;
  userId: string;
  about: string;
  terms: boolean;
}

const Register: NextPage<PageProps> = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    setValue,
  } = useForm<FormData>({ defaultValues: { username: '', email: '', userId: '', about: '' } });
  const { query, push } = useRouter();
  const onGetSocialProfile = async () => {
    const profile = await getSocialProfile();
    setValue('username', profile.name);
    setValue('email', profile.email);
  };

  useEffect(() => {
    if (query.social) {
      onGetSocialProfile();
    }
  }, [query.social]);

  const onSubmit: SubmitHandler<FormData> = data => {
    try {
      axiosInstance.post('/auth/social/register', {
        userId: data.userId,
        username: data.username,
        about: data.about,
      });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
    push('/');
  };

  return (
    <Box w='768px' mx='auto' mt='100px'>
      <Text as='h1' fontSize='4rem' fontWeight='bold' color='black'>
        환영합니다!
      </Text>
      <Text as='h1' fontSize='1.5rem' color='black'>
        기본 회원 정보를 등록해주세요.
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex my='3rem' direction={'column'} gap='30px'>
          <RegisterInput
            label='이름'
            size={14}
            name='username'
            control={control}
            placeholder='이름을 입력하세요'
            rules={{ required: '사용자 ID를 입력해주세요.' }}
          />
          <RegisterInput
            label='사용자 ID'
            size={14}
            name='userId'
            control={control}
            placeholder='새 사용자 ID를 입력하세요'
            rules={{ required: '사용자 ID를 입력해주세요.' }}
          />
          <RegisterInput
            label='이메일'
            size={18}
            name='email'
            control={control}
            type='email'
            placeholder='이메일을 입력하세요'
            rules={{ required: '이메일을 입력해주세요.' }}
            readOnly
          />
          <RegisterInput
            label='한 줄 소개'
            size={24}
            name='about'
            control={control}
            placeholder='당신을 한 줄로 소개해보세요'
          />
          <Box>
            <Checkbox
              colorScheme='teal'
              size={'lg'}
              {...register('terms', { required: '이용약관과 개인정보취급방침에 동의해주세요.' })}
            >
              <Text fontSize={'sm'}>
                <Link color='teal.500' href='#'>
                  이용약관
                </Link>
                과{' '}
                <Link color='teal.500' href='#'>
                  개인정보취급방침
                </Link>
                에 동의합니다.
              </Text>
            </Checkbox>
            <Text fontSize={'xs'} color={'red.500'} mt={1}>
              {errors?.terms?.message}
            </Text>
          </Box>
          <Flex mt={'60px'} gap='20px'>
            <Button size='lg'>취소</Button>
            <Button type='submit' colorScheme='teal' size='lg'>
              가입
            </Button>
          </Flex>
        </Flex>
      </form>
    </Box>
  );
};

export default Register;

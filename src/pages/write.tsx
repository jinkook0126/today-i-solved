import { NextPage } from 'next';
import { useEffect, useState, useCallback } from 'react';
import { Box, Input, Flex, useToast } from '@chakra-ui/react';
import TagInput from '@/components/write/tagInput';
import WriteLayout from '@/components/layout/write_layout';
import LevelRating from '@/components/write/levelRating';
import dynamic from 'next/dynamic';
import WriteFooterButton from '@/components/write/writeFooterButton';
import { useRouter } from 'next/router';
interface PageProps {}

const NoSsrEditor = dynamic(() => import('@/components/write/toastEditor'), {
  ssr: false,
});
const Divider = () => (
  <Box
    mt={{ sm: '1rem', md: '1.5rem' }}
    mb={{ sm: '0.66rem', md: '1rem' }}
    w='6rem'
    h='6px'
    borderRadius='1px'
    backgroundColor='gray.400'
  />
);

const Write: NextPage<PageProps> = () => {
  const router = useRouter();
  const toast = useToast();
  const [tags, setTags] = useState<string[]>([]);
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const onTagChange = (tag: string[]) => {
    setTags(tag);
  };

  const onRatingChange = (rate: number) => {
    setRating(rate);
  };

  const onEditorChange = (value: string) => {
    setContents(value);
  };

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const isInvalidInput = useCallback(() => {
    let msg = '';
    if (title === '') msg = '제목이 비어있습니다.';
    else if (contents === '') msg = '내용이 비어있습니다.';
    else if (rating === 0) msg = '난이도를 선택해주세요.';

    if (msg !== '') {
      toast({
        description: msg,
        status: 'error',
        duration: 3000,
        isClosable: true,
        variant: 'subtle',
      });
      return true;
    }
    return false;
  }, [title, rating, contents]);

  const onGoBack = () => router.back();
  const onTempSave = () => {
    if (isInvalidInput()) return;
  };
  const onSave = () => {};

  useEffect(() => {
    console.log(rating, tags);
  }, [rating, tags]);

  return (
    <WriteLayout>
      <Box
        w={{ base: 'calc(100% - 2rem)', '2xl': '1728px', xl: '1376px', lg: '1024px' }}
        bg='white'
        h='100vh'
        marginX='auto'
      >
        <Flex paddingY={{ sm: '1rem', md: '2rem' }} paddingX={{ sm: '16px', md: '3rem' }} h='100%' direction='column'>
          <Input
            variant='unstyled'
            placeholder='제목을 입력하세요'
            h={{ sm: '43px', md: '66px' }}
            fontSize={{ sm: '1.8rem', md: '2.75rem' }}
            fontWeight='700'
            onChange={onChangeTitle}
            value={title}
          />
          <Divider />
          <TagInput initialTags={tags} onChange={onTagChange} />
          <Divider />
          <LevelRating initialRating={rating} onChange={onRatingChange} />
          <Flex direction='column' justify='space-between' h='100%' mt={{ sm: '1rem', md: '1.5rem' }}>
            <Flex flex={1}>
              <Box width='100%'>
                <NoSsrEditor initContents={contents} onChange={onEditorChange} />
              </Box>
            </Flex>
            <WriteFooterButton onGoBack={onGoBack} onSave={onSave} onTempSave={onTempSave} />
          </Flex>
        </Flex>
      </Box>
    </WriteLayout>
  );
};

export default Write;

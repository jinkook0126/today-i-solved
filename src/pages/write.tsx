import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Box, Input, Flex, Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import TagInput from '@/components/write/tagInput';
import WriteLayout from '@/components/layout/write_layout';
import LevelRating from '@/components/write/levelRating';
import dynamic from 'next/dynamic';
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
  const [tags, setTags] = useState<string[]>([]);
  const [rating, setRating] = useState(0);

  const onTagChange = (tag: string[]) => {
    setTags(tag);
  };

  const onRatingChange = (rate: number) => {
    setRating(rate);
  };

  const onEditorChange = (value: string) => {
    console.log(value);
  };

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
          />
          <Divider />
          <TagInput initialTags={tags} onChange={onTagChange} />
          <Divider />
          <LevelRating initialRating={rating} onChange={onRatingChange} />
          <Flex direction='column' justify='space-between' h='100%' mt={{ sm: '1rem', md: '1.5rem' }}>
            <Flex flex={1}>
              <Box width='100%'>
                <NoSsrEditor initContents='' onChange={onEditorChange} />
              </Box>
            </Flex>
            <Flex h='4rem' direction='row' justifyContent='space-between' alignItems='center'>
              <Button leftIcon={<ArrowBackIcon />} variant='ghost' fontWeight={400} fontSize='1.125rem'>
                나가기
              </Button>
              <Flex gap='0.75rem'>
                <Button colorScheme='teal' variant='ghost' fontSize='1.125rem'>
                  임시저장
                </Button>
                <Button colorScheme='teal' variant='solid' fontSize='1.125rem'>
                  발행하기
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </WriteLayout>
  );
};

export default Write;

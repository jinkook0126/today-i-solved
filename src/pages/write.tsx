import '@toast-ui/editor/dist/toastui-editor.css'; // Editor's Style
import Editor from '@toast-ui/editor';
import { useRef, useEffect, useState } from 'react';
import WriteLayout from '@/components/layout/write_layout';
import { Box, Text, Heading, Flex, Input, Tag } from '@chakra-ui/react';
import { NextPage } from 'next';
interface PageProps {}

const Write: NextPage<PageProps> = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [tags, setTags] = useState(['FE', '정수론']);
  // useEffect(() => {
  //   if (editorRef.current !== null) {
  //     const editor = new Editor({
  //       el: editorRef.current,
  //       height: '500px',
  //       initialEditType: 'markdown',
  //       previewStyle: 'vertical',
  //     });

  //     editor.getMarkdown();
  //   }
  // }, []);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {};
  return (
    <WriteLayout>
      <Box
        w={{ base: 'calc(100% - 2rem)', '2xl': '1728px', xl: '1376px', lg: '1024px' }}
        bg={'white'}
        h='100vh'
        marginX='auto'
      >
        <Box paddingTop={{ sm: '1rem', md: '2rem' }} paddingX={{ sm: '16px', md: '3rem' }}>
          <Input
            variant='unstyled'
            placeholder='제목을 입력하세요'
            h={{ sm: '43px', md: '66px' }}
            fontSize={{ sm: '1.8rem', md: '2.75rem' }}
            fontWeight={'700'}
          />
          <Box
            mt={{ sm: '1rem', md: '1.5rem' }}
            mb={{ sm: '0.66rem', md: '1rem' }}
            w='4rem'
            h='6px'
            borderRadius='1px'
            backgroundColor='gray.400'
          />
          <Flex flexWrap='wrap'>
            {tags.map(tag => (
              <Tag
                h={{ sm: '1.5rem', md: '2rem' }}
                fontSize={{ sm: '0.75rem', md: '1rem' }}
                borderRadius={{ sm: '0.75rem', md: '1rem' }}
                paddingX={{ sm: '0.75rem', md: '1rem' }}
                mr={{ sm: '0.5rem', md: '0.75rem' }}
                mb={{ sm: '0.5rem', md: '0.75rem' }}
                color={'teal'}
                bg='gray.100'
              >
                {tag}
              </Tag>
            ))}
            <Input
              display='inline-flex'
              variant='unstyled'
              placeholder='태그를 입력하세요'
              padding='1px'
              w='14rem'
              // h={{ sm: '43px', md: '66px' }}
              h={{ sm: '2rem', md: '2.125rem' }}
              fontSize={{ sm: '0.75rem', md: '1.125rem' }}
              lineHeight={{ sm: '1.5rem', md: '2rem' }}
              onKeyDown={onKeyDown}
            />
          </Flex>
        </Box>
      </Box>
      <Box>{/* <div ref={editorRef}></div> */}</Box>
    </WriteLayout>
  );
};

export default Write;

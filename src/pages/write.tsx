import '@toast-ui/editor/dist/toastui-editor.css'; // Editor's Style
import Editor from '@toast-ui/editor';
import { useRef, useEffect } from 'react';
import WriteLayout from '@/components/layout/write_layout';
import { Box, Text, Heading, Flex, Input } from '@chakra-ui/react';
import { NextPage } from 'next';
interface PageProps {}

const Write: NextPage<PageProps> = () => {
  const editorRef = useRef<HTMLDivElement>(null);
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
        </Box>
      </Box>
      <Box>{/* <div ref={editorRef}></div> */}</Box>
    </WriteLayout>
  );
};

export default Write;

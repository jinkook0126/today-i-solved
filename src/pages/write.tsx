import '@toast-ui/editor/dist/toastui-editor.css'; // Editor's Style
import Editor from '@toast-ui/editor';
import { useRef, useEffect } from 'react';
import WriteLayout from '@/components/layout/write_layout';
import { Box, Text, Heading } from '@chakra-ui/react';
import { NextPage } from 'next';
interface PageProps {}

const Write: NextPage<PageProps> = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (editorRef.current !== null) {
      const editor = new Editor({
        el: editorRef.current,
        height: '500px',
        initialEditType: 'markdown',
        previewStyle: 'vertical',
      });

      editor.getMarkdown();
    }
  }, []);
  return (
    <WriteLayout>
      <Box>
        <div ref={editorRef}></div>
      </Box>
    </WriteLayout>
  );
};

export default Write;

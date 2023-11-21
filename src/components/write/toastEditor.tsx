import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import { useRef } from 'react';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { Editor } from '@toast-ui/react-editor';
import { Box } from '@chakra-ui/react';

interface Props {
  initContents: string;
  onChange: (content: string) => void;
}

const ToastEditor = ({ initContents = '', onChange }: Props) => {
  const editorRef = useRef<Editor>(null);
  const toolbarItems = [
    ['heading', 'bold', 'italic', 'strike'],
    ['hr'],
    ['ul', 'ol', 'task'],
    ['table', 'link'],
    ['image'],
    ['code'],
    ['scrollSync'],
  ];

  const handleChnage = () => {
    const md = editorRef?.current ? editorRef?.current.getInstance().getMarkdown() : '';
    onChange(md);
  };

  return (
    <Editor
      ref={editorRef}
      initialValue={initContents || ' '} // 글 수정 시 사용
      onChange={handleChnage}
      initialEditType='markdown' // wysiwyg & markdown
      previewStyle={window.innerWidth > 1000 ? 'vertical' : 'tab'} // tab, vertical
      hideModeSwitch={true}
      height='calc(100% - 10rem)'
      theme={''} // '' & 'dark'
      usageStatistics={false}
      toolbarItems={toolbarItems}
      useCommandShortcut={true}
      plugins={[colorSyntax]}
    />
    // <Box>
    //   {editorRef && (
    //     <Editor
    //       ref={editorRef}
    //       initialValue={initContents || ' '} // 글 수정 시 사용
    //       initialEditType='markdown' // wysiwyg & markdown
    //       previewStyle={window.innerWidth > 1000 ? 'vertical' : 'tab'} // tab, vertical
    //       hideModeSwitch={true}
    //       height='calc(100% - 10rem)'
    //       theme={''} // '' & 'dark'
    //       usageStatistics={false}
    //       toolbarItems={toolbarItems}
    //       useCommandShortcut={true}
    //       plugins={[colorSyntax]}
    //     />
    //   )}
    // </Box>
  );
};
export default ToastEditor;

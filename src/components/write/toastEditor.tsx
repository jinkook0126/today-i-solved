import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import 'prismjs/themes/prism.css';

import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import Prism from 'prismjs';
import { useRef, useEffect } from 'react';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { Editor } from '@toast-ui/react-editor';
import { useMediaQuery } from '@chakra-ui/react';

interface Props {
  initContents: string;
  onChange: (content: string) => void;
}

const ToastEditor = ({ initContents, onChange }: Props) => {
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)');
  const editorRef = useRef<Editor>(null);
  const toolbarItems = [
    ['heading', 'bold', 'italic', 'strike'],
    ['hr', 'quote'],
    ['ul', 'ol', 'task'],
    ['image', 'link'],
    ['code', 'codeblock'],
    ['scrollSync'],
  ];

  const handleChnage = () => {
    const md = editorRef?.current ? editorRef?.current.getInstance().getMarkdown() : '';
    onChange(md);
  };

  return (
    <Editor
      ref={editorRef}
      initialValue={initContents || '문제에 대한 설명과 풀이를 적어주세요!'}
      onChange={handleChnage}
      initialEditType='markdown'
      previewStyle={isLargerThan1000 ? 'vertical' : 'tab'}
      hideModeSwitch={true}
      height='100%'
      usageStatistics={false}
      toolbarItems={toolbarItems}
      useCommandShortcut={true}
      plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
    />
  );
};
export default ToastEditor;

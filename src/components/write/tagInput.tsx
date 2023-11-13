import { useState, useCallback, useEffect } from 'react';
import { Input, Tag, Flex, keyframes } from '@chakra-ui/react';
interface TagInputProps {
  initialTags: string[];
  onChange: (tags: string[]) => void;
}

const tagAnimation = keyframes`
  from { transform: scale3d(0.8, 0.8, 1); opacitiy: 0.7; }
  to { transform: scale3d(1, 1, 1); opacitiy: 1; }
`;
const TagInput = ({ initialTags, onChange }: TagInputProps) => {
  const [tags, setTags] = useState<string[]>(initialTags);
  const [value, setValue] = useState('');
  const animation = `0.125s ease-in-out 0s 1 normal forwards running ${tagAnimation}`;

  useEffect(() => {
    if (tags.length === 0) return;
    onChange(tags);
  }, [tags]);

  const onTagClick = useCallback(
    (tag: string) => {
      setTags(prev => prev.filter(t => t !== tag));
    },
    [tags],
  );

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Backspace' && value === '') {
        setTags(prev => prev.slice(0, prev.length - 1));
        return;
      }
      if (['Enter', ','].includes(e.key)) {
        e.preventDefault();
        const split = value.split('#');
        const tmp: string[] = [];
        split.forEach(v => {
          if (v !== '' && !tags.includes(v.trim())) {
            tmp.push(v.trim());
          }
        });
        setTags(prev => [...prev, ...tmp]);
        setValue('');
        return;
      }
    },
    [value],
  );

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Flex flexWrap='wrap'>
      {tags.map((tag, i) => (
        <Tag
          h={{ sm: '1.5rem', md: '2rem' }}
          fontSize={{ sm: '0.75rem', md: '1rem' }}
          borderRadius={{ sm: '0.75rem', md: '1rem' }}
          paddingX={{ sm: '0.75rem', md: '1rem' }}
          mr={{ sm: '0.5rem', md: '0.75rem' }}
          mb={{ sm: '0.5rem', md: '0.75rem' }}
          color={'teal'}
          bg='gray.100'
          cursor='pointer'
          onClick={() => onTagClick(tag)}
          animation={animation}
          key={String(i)}
          transition='ease-in 0.125s'
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
        h={{ sm: '2rem', md: '2.125rem' }}
        fontSize={{ sm: '0.75rem', md: '1.125rem' }}
        lineHeight={{ sm: '1.5rem', md: '2rem' }}
        onKeyDown={onKeyDown}
        onChange={onChangeInput}
        value={value}
      />
    </Flex>
  );
};

export default TagInput;

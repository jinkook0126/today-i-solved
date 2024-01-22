import { Flex, Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

interface WriteFooterButtonProps {
  onGoBack: () => void;
  onTempSave: () => void;
  onSave: () => void;
}
const WriteFooterButton = ({ onGoBack, onTempSave, onSave }: WriteFooterButtonProps) => {
  return (
    <Flex h='4rem' direction='row' justifyContent='space-between' alignItems='center'>
      <Button leftIcon={<ArrowBackIcon />} variant='ghost' fontWeight={400} fontSize='1.125rem' onClick={onGoBack}>
        나가기
      </Button>
      <Flex gap='0.75rem'>
        <Button colorScheme='teal' variant='ghost' fontSize='1.125rem' onClick={onTempSave}>
          임시저장
        </Button>
        <Button colorScheme='teal' variant='solid' fontSize='1.125rem' onClick={onSave}>
          발행하기
        </Button>
      </Flex>
    </Flex>
  );
};

export default WriteFooterButton;

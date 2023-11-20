import { useState, useEffect } from 'react';
import { Rating } from 'react-simple-star-rating';
import { Box, Text } from '@chakra-ui/react';

interface LevelRatingProps {
  initialRating: number;
  onChange: (rate: number) => void;
}

const fillColorArray = ['#f17a45', '#f19745', '#f1a545', '#f1b345', '#f1d045'];
const tooltipArray = [
  '난이도를 선택해 주세요',
  '매우 간단한 문제에요 🥱',
  '간단한 문제에요 😎',
  '적당한 문제에요 😃',
  '어려운 문제에요 🧐',
  '매우 어려운 문제에요 🤯',
];

const LevelRating = ({ initialRating, onChange }: LevelRatingProps) => {
  const [rating, setRating] = useState(initialRating);
  const [tooltip, setTooltip] = useState(tooltipArray[initialRating]);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const onPointerMove = (value: number) => {
    setTooltip(tooltipArray[value]);
  };

  const onPointerLeave = () => {
    if (rating === 0) setTooltip(tooltipArray[0]);
  };

  useEffect(() => {
    onChange(rating);
  }, [rating]);

  return (
    <Box w='fit-content' textAlign='center'>
      <Rating
        SVGstyle={{ display: 'inline-block' }}
        fillColorArray={fillColorArray}
        transition
        initialValue={rating}
        onClick={handleRating}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
      />
      <Text color='gray.700' fontSize={{ sm: '0.875rem', md: '1rem' }} mt='0.25rem'>
        {tooltip}
      </Text>
    </Box>
  );
};
export default LevelRating;

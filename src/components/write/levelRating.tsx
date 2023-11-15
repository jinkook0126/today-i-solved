import { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

interface LevelRatingProps {
  initialRating: number;
  onChange: (rate: number) => void;
}

// const tooltipArray = ['Easy +', 'Easy', 'Average', 'Hard', 'Hard +'];
const tooltipArray = ['난이도 1', '난이도 2', '난이도 3', '난이도 4', '난이도 5'];
const fillColorArray = ['#f17a45', '#f19745', '#f1a545', '#f1b345', '#f1d045'];

const LevelRating = ({ initialRating, onChange }: LevelRatingProps) => {
  const [rating, setRating] = useState(initialRating);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const onPointerMove = (value: number, index: number) => {
    onChange(value);
  };

  return (
    <Rating
      SVGstyle={{ display: 'inline-block' }}
      fillColorArray={fillColorArray}
      tooltipArray={tooltipArray}
      showTooltip
      // tooltipStyle={{ background: 'color(srgb 0.1765 0.2157 0.2824)' }}
      tooltipStyle={{ background: 'transparent', color: 'red', fontWeight: 'bold' }}
      transition
      initialValue={rating}
      onClick={handleRating}
      onPointerMove={onPointerMove}
    />
  );
};
export default LevelRating;

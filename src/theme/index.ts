import { extendTheme } from '@chakra-ui/react';
import breakpoints from './breakPoints';
import fonts from './fonts';
import shadows from './shadows';

const overrides = {
  breakpoints,
  fonts,
  shadows,
};
export default extendTheme(overrides);

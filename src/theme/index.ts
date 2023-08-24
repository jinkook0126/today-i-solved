import { extendTheme } from '@chakra-ui/react';
import breakpoints from './breakPoints';
import fonts from './fonts';

const overrides = {
  breakpoints,
  fonts,
};
export default extendTheme(overrides);

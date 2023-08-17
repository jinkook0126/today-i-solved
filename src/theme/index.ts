import { extendTheme } from '@chakra-ui/react';
import breakpoints from './breakPoints';

const overrides = {
  breakpoints,
};
export default extendTheme(overrides);

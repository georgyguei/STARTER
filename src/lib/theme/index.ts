import { colors } from './colors';
import { extendTheme } from './extendTheme';
import { typography } from './typography';

const customTheme = extendTheme({
  colors,
  ...typography,
});

export default customTheme;

import * as styledComponents from 'styled-components';
import { switchProp, ifProp } from 'styled-tools';

import { ThemeType } from 'components/ui/theme/types';

/**
 * Типизирование темы через переопределение модуля
 */

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeType>;

type ThemedStyledProps<P> = styledComponents.ThemedStyledProps<P, ThemeType>;

export { css, createGlobalStyle, keyframes, ThemeProvider, ThemedStyledProps, switchProp, ifProp };
export default styled;

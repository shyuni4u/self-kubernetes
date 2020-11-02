import baseStyled, {
  css,
  CSSProp,
  ThemedStyledInterface
} from 'styled-components';

const sizes: { [key: string]: number } = {
  mobile: 320,
  tablet: 768,
  // desktop: 1024
  desktop: 1200
};

type BackQuoteArgs = string[];

type Media = {
  mobile: (...args: BackQuoteArgs) => CSSProp | undefined;
  tablet: (...args: BackQuoteArgs) => CSSProp | undefined;
  desktop: (...args: BackQuoteArgs) => CSSProp | undefined;
};

const media: Media = {
  mobile: (...args: BackQuoteArgs) => undefined,
  tablet: (...args: BackQuoteArgs) => undefined,
  desktop: (...args: BackQuoteArgs) => undefined
};

Object.keys(sizes).reduce((acc: Media, label: string) => {
  switch (label) {
    case 'desktop':
      acc.desktop = (...args: BackQuoteArgs) => css`
        @media only screen and (min-width: ${sizes.desktop}px) {
          ${args}
        }
      `;
      break;
    case 'tablet':
      acc.tablet = (...args: BackQuoteArgs) => css`
        @media only screen and (max-width: ${sizes.desktop}px) and (min-width: ${sizes.tablet}px) {
          ${args}
        }
      `;
      break;
    case 'mobile':
      acc.mobile = (...args: BackQuoteArgs) => css`
        @media only screen and (max-width: ${sizes.tablet}px) {
          ${args}
        }
      `;
      break;
    default:
      break;
  }
  return acc;
}, media);

const colors = {
  main: '#272A34',
  sub: '#727985',
  hover: '#ECE9F6', // hover text color
  black: '#222222',
  gray8: '#888888',
  grayA: '#aaaaaa',
  grayC: '#cccccc', //	disabled text color
  grayD: '#dadce0',
  grayE: '#e8eaed',
  grayF: '#f5f5f5',
  background: '#f8f9fa',
  primary: '#272A34',
  secondary: '#727985',
  success: '#137333',
  danger: '#e95656',
  warning: '#fdcc5e',
  info: '#889f85',
  white: '#ffffff'
};

const secondaryColors = {};
const fontFamily = ['SpoqaHanSans', 'Arial', 'Courier'].join(',');
const fontSizes = {
  h1: '32px',
  h2: '24px',
  h3: '20px',
  subtitle16: '16px', //  h4
  body14: '14px', //  h5
  cation12: '12px' //  h6
};

const theme = {
  colors,
  fontSizes,
  fontFamily,
  secondaryColors,
  media
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;
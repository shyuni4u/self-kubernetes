import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* @font-face {
    font-family: "Museo Sans";
    src: url("../fonts/en/Museo Sans 300.OTF");
    font-style: normal;
    font-weight: 300;
    font-display: swap;
  }
  
  @font-face {
    font-family: "Noto Sans";
    src: url("/fonts/en/Noto Sans Regular.OTF");
    font-style: normal;
    font-weight: 300;
    font-display: swap;
  } */

  * {
    box-sizing: border-box;
    font-family: 'Museo Sans', 'Noto Sans';
    line-height: 1.5;
  }
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, menu, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    font-family: 'Museo Sans', 'Noto Sans';
    line-height: 1.5;
  }
  body {
    /* background-color: #e8eaed; */
    background-color: #000;
    color: #fff;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  ol, ul, li {
    list-style: none;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  h1 { font-size: 2em; }
  h2 { font-size: 1.5em; }
  h3 { font-size: 1.17em; }
  h4 { font-size: 1em; }
  h5 { font-size: .83em; }
  h6 { font-size: .67em; }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;

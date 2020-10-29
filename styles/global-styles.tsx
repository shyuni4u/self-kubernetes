import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    font-family: 'Spoqa Han Sans', 'Sans-serif';
  }
  body {
    /* background-color: #e8eaed; */
    background-color: #ffffff;
  }
  a {
    color: inherit;
    text-decoration: none;
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
  h1 { font-size: 2em; margin-top: 14px; }
  h2 { font-size: 1.5em; margin-top: 14px; }
  h3 { font-size: 1.17em; margin-top: 14px; }
  h4 { font-size: 1em; margin-top: 14px; }
  h5 { font-size: .83em; margin-top: 14px; }
  h6 { font-size: .67em; margin-top: 14px; }
`;

export default GlobalStyle;

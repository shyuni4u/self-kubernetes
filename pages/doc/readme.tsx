import React from 'react';
import ReactMarkdown from 'react-markdown';
import htmlParser from 'react-markdown/plugins/html-parser';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  okaidia,
  solarizedlight,
  tomorrow,
  twilight,
  dark,
  dracula,
  darcula,
  vscDarkPlus
} from 'react-syntax-highlighter/dist/cjs/styles/prism';

import Wrapper from '../../components/organisms/Wrapper';

const renderers = {
  code: ({ language, value }) => {
    return <SyntaxHighlighter style={vscDarkPlus} language={language} children={value} />;
  }
};

const getFile = (path: string) => {
  const file = require.context('../../docs', true, /\.(md|gif|jpe?g|svg)$/);
  try {
    return file(`./${path}`);
  } catch {
    return null;
  }
};

export const Readme: React.FC = () => {
  const content = getFile('test.md').default;

  return (
    <Wrapper>
      <ReactMarkdown renderers={renderers} children={content} allowDangerousHtml={true} />
    </Wrapper>
  );
};

export default Readme;

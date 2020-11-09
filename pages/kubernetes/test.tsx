import React from 'react';
import ApiTest from '../../components/organisms/Test';
import Wrapper from '../../components/organisms/Wrapper';

import reducerCount from '../../reducers/reducerCount';

export const Test: React.FC = () => {
  const { gCount } = reducerCount();

  return (
    <Wrapper>
      <ApiTest />
      <span>{gCount.get()}</span>
    </Wrapper>
  );
};

export default Test;

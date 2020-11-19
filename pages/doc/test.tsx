import React from 'react';

import Button from '../../components/atoms/Button';
import Modal from '../../components/atoms/Modal';
import Wrapper from '../../components/organisms/Wrapper';

export const Test: React.FC = () => {
  return (
    <Wrapper>
      <Modal show trigger={<Button>Popup</Button>}>
        <h3>TEST</h3>
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        <br />
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
      </Modal>
      <div style={{ height: '1250px' }}></div>
    </Wrapper>
  );
};

export default Test;

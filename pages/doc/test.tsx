import React, { useState } from 'react';

import Button from '../../components/atoms/Button';
import Modal from '../../components/atoms/Modal';
import Wrapper from '../../components/organisms/Wrapper';

export const Test: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <Wrapper>
      <Button onClick={() => setShowModal(true)}>Popup</Button>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <h3>TEST</h3>
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        <br />
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        <Button onClick={() => setShowModal(false)}>Close</Button>
      </Modal>
      <div style={{ height: '1250px' }}></div>
    </Wrapper>
  );
};

export default Test;

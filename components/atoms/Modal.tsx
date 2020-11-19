import React, { useState, useEffect, ReactElement, CSSProperties } from 'react';
import styled, { keyframes } from 'styled-components';

export type ModalProps = {
  /**
   * CSS
   */
  style?: CSSProperties;
  /**
   * Show / Hide
   */
  show?: boolean;
  /**
   * Trigger button or a
   */
  trigger: ReactElement;
};

type ModalShowProps = {
  show: boolean;
};

const StyledTrigger = styled.div`
  display: unset;
`;
const StyledModalBackground = styled.div<ModalShowProps>`
  display: ${(prop) => (prop.show ? 'inherit' : 'none')};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.main};
  opacity: 0.5;
`;
const modalFade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const StyledModal = styled.div<ModalShowProps>`
  display: ${(prop) => (prop.show ? 'inherit' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 300px;
  max-width: calc(100vw - 20px);
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.background};
  overflow: auto;
  animation: ${modalFade} 0.8s both;
`;
const StyledModalContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const StyledModalClose = styled.button.attrs({
  type: 'button'
})`
  position: absolute;
  display: flex;
  align-items: center;
  top: -0.6rem;
  right: -1.2rem;
  width: 2rem;
  height: 2rem;
  font-size: 1.8rem;
  line-height: 1.8rem;
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid #fff;
`;

export const Modal: React.FC<ModalProps> = ({ style = {}, show = false, trigger = <></>, ...props }) => {
  const [showModal, setShowModal] = useState<boolean>(show);

  useEffect(() => {
    if (showModal) {
      const body = document.body;
      body.style.height = '100vh';
      body.style.overflowY = 'hidden';
    } else {
      const body = document.body;
      body.style.position = '';
      body.style.top = '';
      body.style.height = '';
      body.style.overflowY = '';
    }
  }, [showModal]);

  return (
    <>
      <StyledTrigger onClick={() => setShowModal((prev) => !prev)}>{trigger}</StyledTrigger>
      <StyledModalBackground show={showModal} onClick={() => setShowModal(false)}></StyledModalBackground>
      <StyledModal show={showModal} style={style} {...props}>
        <StyledModalContent>
          <StyledModalClose onClick={() => setShowModal(false)}>&times;</StyledModalClose>
          {props.children}
        </StyledModalContent>
      </StyledModal>
    </>
  );
};

export default Modal;

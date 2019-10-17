import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { StyledModal } from './ModalStyles';

function Portal({ children }) {
  const modalRoot = document.getElementById('modal-root');
  const element = document.createElement('div');
  useEffect(() => {
    modalRoot.appendChild(element);

    return function cleanup() {
      modalRoot.removeChild(element);
    };
  });

  return createPortal(children, element);
}

function Modal({ children, toggle, open }) {
  return (
    <Portal>
      {open && (
        <StyledModal.ModalWrapper onClick={toggle}>
          <StyledModal.ModalBody onClick={event => event.stopPropagation()}>
            <StyledModal.CloseButton onClick={toggle}>
              &times;
            </StyledModal.CloseButton>
            {children}
          </StyledModal.ModalBody>
        </StyledModal.ModalWrapper>
      )}
    </Portal>
  );
}

export default Modal;

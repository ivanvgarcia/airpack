import styled, { keyframes } from 'styled-components';

const scaleUp = keyframes`
from {  
  transform: scale(-0);
}

to {  
  transform: scale(100%);
}
`;

const ModalWrapper = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalBody = styled.div`
  position: relative;
  background-color: #fefefe;
  margin: auto;
  border: 1px solid #888;
  width: 50%;
  border-radius: 10px;
  box-shadow: ${({ theme }) => `0 2px 4px ${theme.colors.black}`};
  animation: ${scaleUp} 0.3s linear forwards;
`;

const CloseButton = styled.span`
  color: ${({ theme }) => theme.colors.black};
  position: absolute;
  top: 5px;
  right: 15px;
  font-size: 50px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const StyledModal = {
  ModalWrapper,
  ModalBody,
  CloseButton
};

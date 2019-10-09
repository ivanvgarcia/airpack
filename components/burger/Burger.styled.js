import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: fixed;
  top: 5%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 2.8rem;
  height: 2.8rem;
  background: ${({ theme, open }) =>
    open ? theme.colors.primary : theme.colors.black};
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10000;
  border-radius: 50%;

  &:focus {
    outline: none;
  }

  div {
    width: 1.6rem;
    height: 0.25rem;
    background: ${({ theme, open }) =>
    open ? theme.colors.black : theme.colors.primary};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    margin: 3px 0;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

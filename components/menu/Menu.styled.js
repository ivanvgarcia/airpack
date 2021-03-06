import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary};
  min-height: 100vh;
  text-align: left;
  padding: 2rem 2rem 2rem 8rem;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  z-index: 9999;
  clip-path: polygon(16% 0, 100% 0%, 100% 100%, 0 100%);

  svg {
    margin-bottom: 20px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    clip-path: none;
    align-items: center;
    padding: 0;
  }

  button {
    font-size: 1.2rem;
    text-transform: uppercase;
    padding: .5rem 0;
    font-weight: bold;
    letter-spacing: 0.4rem;
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.grey};
    }
  }
`;

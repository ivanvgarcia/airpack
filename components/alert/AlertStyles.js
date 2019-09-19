import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 500px;
  min-height: 100px;
  position: fixed;
  top: 20px;
  right: 20px;
  box-shadow: 1px 3px 2px #000;
  background: ${props => props.theme.color.primary};
  animation: slide-in 0.4s forwards;
  overflow: hidden;
  z-index: 9999;
  @media only screen and (max-width: 500px) {
    width: 70%;
  }
`;

export const Header = styled.h4`
  background: white;
  color: ${props => props.theme.colors.primary};
  text-align: center;
  font-size: 1.6rem;
  margin: 0;
  padding 5px 0;
  @media only screen and (max-width: 1000px) {
    font-size: 1rem;
  }
`;

export const Body = styled.div`
  color: white;
  padding: 5px;
`;

export const Content = styled.p`
  color: white;
  font-size: 1.2rem;
  margin-left: 5px;
  @media only screen and (max-width: 1000px) {
    font-size: 0.8rem;
  }
`;

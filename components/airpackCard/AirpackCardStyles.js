import styled from 'styled-components';

export const AirpackCardContainer = styled.div`
  background: #fff;
  box-shadow: 0 5px 10px #828282;
  width: 80%;
  position: relative;
  margin: 40px 0;
  border-radius: 10px;
  @media (min-width: 768px) {
    display: flex;
    max-width: 600px;
    margin: 40px 20px;
    img {
      width: 30%;
    }
  }
`;

export const AirpackCardImage = styled.img`
  width: 100%;
  @media (min-width: 768px) {
  }
`;

export const AirpackCardPrice = styled.p`
  position: absolute;
  right: 20px;
  bottom: 5px;
`;

export const AirpackCardContent = styled.div`
  padding: 15px 15px 50px;
`;

export const AirpackCardTitle = styled.h4`
  width: 100%;
  text-align: center;
`;

export const AirpackCardDescription = styled.p``;

export const AirpackCardDetails = styled.div`
  padding: 20px;
`;

export const AirpackCardButton = styled.button`
  position: absolute;
  bottom: -20px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  box-shadow: ${({ theme }) => `0 2px 4px ${theme.colors.black}`};
`;

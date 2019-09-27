import styled from 'styled-components';
import Link from 'next/link';

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

export const Wrapper = styled.div``;

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  border-bottom: 5px dashed ${props => props.theme.colors.primary};
`;

export const StyledLink = styled.a`
  background: ${props => props.theme.colors.primary};
  border: none;
  border-radius: 5px;
  color: #fff;
  padding: 10px;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  cursor: pointer;
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 30px;
  padding: 0 10px;
  @media (min-width: 768px) {
    padding: 0 40px;
    margin-bottom: 20px;
  }
`;

export const Button = styled.button``;

export const Section = styled.section`
  border-bottom: 5px dashed ${props => props.theme.colors.primary};
  min-height: 50vh;
  padding: 20px 0 80px 0;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'column'};
  justify-content: center;
  align-items: ${props => props.align || 'center'};
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Card = styled.div`
  width: 90%;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: 280px;
  }
`;

export const CardContent = styled.div`
  padding: 15px 15px 50px;
`;

export const CardTitle = styled.h4`
  width: 100%;
  text-align: center;
  @media (min-width: 768px) {
    margin-bottom: 60px;
  }
`;

export const CardDescription = styled.p``;

export const CardImage = styled.img`
  width: 100%;
  @media (min-width: 768px) {
  }
`;

export const AirPackCard = styled.div`
  background: #fff;
  box-shadow: 0 5px 10px #828282;
  width: 80%;
  position: relative;
  margin: 40px 0;
  @media (min-width: 768px) {
    display: flex;
    max-width: 600px;
    margin: 40px 20px;
    img {
      width: 30%;
    }
  }
`;

export const AirPackPrice = styled.p`
  position: absolute;
  right: 20px;
  bottom: 5px;
`;

export const CTAParagraph = styled.p`
  padding: 0 20px;
  margin-bottom: 60px;
  @media (min-width: 768px) {
    font-size: 1.2rem;
    padding: 0 100px;
    margin-bottom: 70px;
  }
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 0.8rem;
  margin-right: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;

  @media (min-width: 768px) {
    padding: 8px;
    font-size: 1.2rem;
  }
`;

export const SVGContainer = styled.div`
  height: 50px;
`;

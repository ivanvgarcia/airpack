import styled from 'styled-components';

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
  border-bottom: 5px dashed turquoise;
`;

export const Title = styled.h2`
  padding: 0 40px;
  text-align: center;
  margin-bottom: 60px;
`;

export const Button = styled.button`
  background: turquoise;
  border: none;
  border-radius: 5px;
  color: #fff;
  padding: 10px;
  font-size: 1rem;
  cursor: pointer;
`;

export const Section = styled.section`
  border-bottom: 5px dashed turquoise;
  min-height: 50vh;
  padding: 20px 0 80px 0;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'column'};
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Card = styled.div`
  width: 90%;
  margin: 20px;
  @media (min-width: 768px) {
    width: 300px;
  }
`;

export const CardContent = styled.div`
  padding: 15px 15px 50px;
`;

export const CardTitle = styled.h4`
  width: 100%;
  text-align: center;
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
  font-size: 1.2rem;
  padding: 0 100px;
  margin-bottom: 70px;
`;

export const Input = styled.input`
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 8px;
  font-size: 1.2rem;
  margin-right: 15px;
`;

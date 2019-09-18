import styled, { keyframes } from 'styled-components';

const slideDown = keyframes`
  from {  
    transform: translateY(-40px);
  }

  to {  
    transform: translateY(0);
  }
`;

export const AccordionDiv = styled.div`
  width: 90%;
  margin: 0 auto;
  border-top: 2px solid turquoise;
  padding: 20px 0;
  @media (min-width: 768px) {
    max-width: 1000px;
  }
`;

export const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const AccordionTitle = styled.h4``;
export const AccordionIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
export const AccordionContent = styled.p`
  animation: ${slideDown} 0.3s linear forwards;
`;

import React from 'react';
import {
  AirpackCardContainer,
  AirpackCardImage,
  AirpackCardContent,
  AirpackCardTitle,
  AirpackCardDescription,
  AirpackCardPrice
} from './AirpackCardStyles';

const AirpackCard = ({ pack: { name, price, description } }) => {
  return (
    <AirpackCardContainer>
      <AirpackCardImage src="https://via.placeholder.com/600" />{' '}
      <AirpackCardContent>
        <AirpackCardTitle>{name}</AirpackCardTitle>
        <AirpackCardDescription>{description}</AirpackCardDescription>
      </AirpackCardContent>
      <AirpackCardPrice>${price}</AirpackCardPrice>
    </AirpackCardContainer>
  );
};

export default AirpackCard;

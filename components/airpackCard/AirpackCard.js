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
      <AirpackCardImage src="/static/airpack_sample.png" />
      <AirpackCardContent>
        <AirpackCardTitle>{name}</AirpackCardTitle>
        <AirpackCardDescription>{description}</AirpackCardDescription>
      </AirpackCardContent>
      <AirpackCardPrice>${price}</AirpackCardPrice>
    </AirpackCardContainer>
  );
};

export default AirpackCard;

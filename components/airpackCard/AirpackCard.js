import React from 'react';
import {
  AirpackCardContainer,
  AirpackCardImage,
  AirpackCardContent,
  AirpackCardTitle,
  AirpackCardDescription,
  AirpackCardPrice,
  AirpackCardDetails,
  AirpackCardButton
} from './AirpackCardStyles';
import useToggle from '../hooks/useToggle';
import Modal from '../modal/Modal';

const AirpackCard = ({ pack }) => {
  const [open, setOpen] = useToggle(false);
  const { name, price, description } = pack;

  return (
    <AirpackCardContainer onClick={() => setOpen()}>
      {open && (
        <Modal open={open} toggle={setOpen} pack={{ ...pack }}>
          <AirpackCardImage src='/static/airpack_sample.png' />
          <AirpackCardDetails>
            <AirpackCardTitle>{name}</AirpackCardTitle>{' '}
            <AirpackCardDescription>{description}</AirpackCardDescription>
            <AirpackCardPrice>${price}</AirpackCardPrice>
          </AirpackCardDetails>
          <AirpackCardButton>Purchase Pack</AirpackCardButton>
        </Modal>
      )}
      <AirpackCardImage src='/static/airpack_sample.png' />
      <AirpackCardContent>
        <AirpackCardTitle>{name}</AirpackCardTitle>
        <AirpackCardDescription>{description}</AirpackCardDescription>
      </AirpackCardContent>
      <AirpackCardPrice>${price}</AirpackCardPrice>
    </AirpackCardContainer>
  );
};

export default AirpackCard;

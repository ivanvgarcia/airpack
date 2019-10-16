import React, { useEffect } from 'react';
import { getPacks } from '../../../redux/actions/airpackActions';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

const PackList = styled.ul`
  width: 95%;
  min-with: 280px;
  background: white;
  border-radius: 5px;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
`;

const Heading = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: ${props =>
    `linear-gradient(120deg, ${props.theme.colors.primary}, #32bfb8)`};
  color: white;
  > * {
    flex: 1;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

const PackRow = styled.li`
  position: relative;
  list-style: none;
  width: 100%;
  display: flex;
  align-items: center;
  transition: background 0.2s linear;

  > * {
    flex: 1;
    text-align: center;
  }

  img {
    max-width: 150px;
    margin: 10px;
  }

  &:hover {
    background: #a2efea;
    cursor: pointer;
  }
`;

const DeletePack = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
  border: none;
  background: red;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  line-height: 0;
  transform: translateX(120%);
  transition: transform 0.2s linear;
  ${PackRow}:hover & {
    transform: translateX(0%);
  }
`;

const Packs = () => {
  const packs = useSelector(state => state.airpackReducer.packs);
  const loading = useSelector(state => state.airpackReducer.loading);
  const dispatch = useDispatch();
  console.log(packs);
  useEffect(() => {
    dispatch(getPacks(20));
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Packs</h1>
      <PackList>
        <Heading>
          <h4>Image</h4>
          <h4>name</h4>
          <h4>description</h4>
          <h4>type</h4>
          <h4>size</h4>
        </Heading>
        {packs.map(({ _id, name, image, description, type, size }) => (
          <PackRow key={_id}>
            <div>
              <img
                src={image || 'http://localhost:3000/static/airpack_sample.png'}
                alt={name}
              />
            </div>
            <h5>{name}</h5>
            <p>{description}</p>
            <p>{type}</p>
            <span>{size}</span>
            <DeletePack>x</DeletePack>
          </PackRow>
        ))}
      </PackList>
    </div>
  );
};

// description: "Shirts, shorts.."
// id: "5d80d08224e0a1bf6f47388f"
// images: []
// items: ["5 shirts"]
// length: 5
// name: "m"
// price: 45
// size: "orange"
// type: "adventure"
// _id: "5d80d08224e0a1bf6f47388f"

Packs.getInitialProps = async ({ reduxStore, req }) => {
  const isServer = !!req;

  await reduxStore.dispatch(getPacks(20));

  return {};
};

export default Packs;

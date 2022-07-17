import React from 'react';
import PropTypes from 'prop-types';
import { StyleLink } from '../Styles/Generals';
import Card from './CardComponent.styles';

export default function CardComponent({ nome, img, id }) {
  return (
    <StyleLink to={`./${id}`}>
      <Card>
        <div />
        <img src={img} alt={nome} />
        <p>{nome}</p>
      </Card>
    </StyleLink>

  );
}

CardComponent.propTypes = {
  nome: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
// import { BasicLink } from '../../Styles/Generals';
import Card from './CardComponent.styles';
import { Title } from '../../Styles/texts';

export default function CardComponent({ title }) {
  return (
  // <BasicLink to={`./${id}`}>
    <Card>
      <div />
      {/* <img src={img} alt={nome} /> */}
      <Title type="Hero">{title}</Title>
    </Card>
  // </BasicLink>

  );
}

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  // img: PropTypes.string.isRequired,
  // id: PropTypes.number.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { Title } from '../../Styles/texts';
import { Card, Par, Button } from './CardComponent.styles';

export default function CardComponent({ title, comentary }) {
  const comentarySmall = comentary.substring(0, 290).concat(' ', '...');
  return (
  // <BasicLink to={`./${id}`}>
    <Card>
      <Title type="Card">{title}</Title>
      <Par type="Card">{comentarySmall}</Par>
      <Button type="button">Leia Mais ...</Button>
    </Card>
  // </BasicLink>

  );
}

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  comentary: PropTypes.string.isRequired,
};

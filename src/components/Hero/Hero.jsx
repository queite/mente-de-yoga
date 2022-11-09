/* eslint-disable max-len */
import React from 'react';
import {
  HeroMain, HeroContent,
} from './Hero.styles';
import getImage from '../../helpers/helpers';

// eslint-disable-next-line react/prop-types
export default function Hero({ page }) {
  return (
    <HeroMain image={() => getImage(page)}>
      <HeroContent />
    </HeroMain>
  );
}

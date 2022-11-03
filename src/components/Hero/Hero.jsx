/* eslint-disable max-len */
import React from 'react';
import {
  HeroMain, HeroContent,
} from './Hero.styles';
// import imagesHero from '../../data/imagesHero';
import getImage from '../../helpers/helpers';

export default function Hero() {
  // const getImage = () => {
  //   const num = Math.floor(Math.random() * (6));
  //   const image = Object.values(imagesHero)[num];
  //   return image;
  // };

  return (
    <HeroMain image={() => getImage()}>
      <HeroContent />
    </HeroMain>
  );
}

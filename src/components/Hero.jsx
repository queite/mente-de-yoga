/* eslint-disable max-len */
import React from 'react';
import imgTomas from '../img/TomasPe.jpg';
import {
  P, Img, HeroBody, MainHero,
} from './Hero.styles';

export default function Hero() {
  return (
    <HeroBody>
      <MainHero>
        <Img>
          <img src={imgTomas} alt="tomas em janusirshasana" />
        </Img>
        <P>
          <h1>Tomas Breuckmann</h1>
          <p>
            Começou seus estudos da tradição védica através do Yoga em
            2011 e desde então vem se dedicando ao aprofundamento teórico e prático desta tradição.
          </p>
        </P>
      </MainHero>
    </HeroBody>
  );
}

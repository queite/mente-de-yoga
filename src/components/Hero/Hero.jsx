/* eslint-disable max-len */
import React from 'react';
import imgTomas from '../../img/TomasPe.jpg';
import {
  GridP, Img, HeroMain, HeroContent,
} from './Hero.styles';
import { Title, P, St } from '../../Styles/texts';

export default function Hero() {
  return (
    <HeroMain>
      <HeroContent>
        <Img>
          <img src={imgTomas} alt="tomas em janusirshasana" />
        </Img>
        <GridP>
          <Title type="Hero">Tomas Breuckmann</Title>
          <P type="Hero">
            Começou seus estudos da tradição védica através do
            <St> Yoga </St>
            em 2011 e desde então vem se dedicando ao aprofundamento teórico e prático desta tradição.
          </P>
        </GridP>
      </HeroContent>
    </HeroMain>
  );
}

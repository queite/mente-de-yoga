/* eslint-disable max-len */
import React from 'react';
import hathaImg from '../../data/imagesHero';
import { P, St, Title } from '../../Styles/texts';
import {
  CursosMain, CursosContent, Text, Img, Button,
} from './Course.styles';

export default function Cursos() {
  const getImage = () => {
    const num = Math.floor(Math.random() * (6));
    const image = Object.values(hathaImg)[num];
    return image;
  };
  const c = 'course';
  return (
    <CursosMain>
      <CursosContent>
        <Text>
          <Title infos={c}>CURSOS</Title>
          <P infos={c}>
            Com abordagem no
            <St infos={c}> Haṭha Yoga </St>
            o curso de
            <St infos={c}> Formação de Instrutores </St>
            conta com uma carga horária de
            <St infos={c}> 200h </St>
            e destina-se a toda pessoa interessada em conhecer mais à si mesma, e também em conhecer e ensinar esta tradição.
          </P>
          <Button>SAIBA MAIS . . .</Button>
        </Text>
        <Img>
          <img src={getImage()} alt="hatha" />
          <div />
        </Img>
      </CursosContent>
    </CursosMain>
  );
}

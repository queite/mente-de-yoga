import React from 'react';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import Hero from '../../../components/Hero/Hero';
// import CardFormacao from '../../components/Cards/CardFormacao';
import {
  CursosMain, CursosContentAbout,
} from './CursosDetails.styles';
import * as T from '../../../Styles/texts';
import FirstInfos from './GeneralInfos';
import Conteudo from './Conteudo';
import Programacao from './Programacao';
import HathaYoga from './HathaYoga';
import Yoga from './Yoga';

export default function CursosInstrutores() {
  const c = 'cursoInstrutores';
  return (
    <CursosMain>
      <Header />
      <Hero />
      <FirstInfos />
      <CursosContentAbout>
        <T.H2 infos={c}>Informações</T.H2>
        <T.P3 infos={c}>
          Formação de Instrutores de Yoga  acalme sua mente,
          liberte-se  e conquiste mais disposição no seu dia a dia.
          Formação de Instrutores a arte de trabalhar o corpo e a mente de forma interligada,
          como a música, o ritmo do corpo, a melodia da mente, e a harmonia da alma,
          criando a sinfonia de vida. Em outras palavras,
          Yoga é a arte de moderar os sentimentos nas ações
          e buscar a felicidade dos sentidos pela concentração correta.
        </T.P3>
      </CursosContentAbout>
      <Yoga />
      <HathaYoga />
      <Programacao />
      <Conteudo />
      <Footer />
    </CursosMain>
  );
}

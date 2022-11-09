import React from 'react';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import Hero from '../../../components/Hero/Hero';
// import CardFormacao from '../../components/Cards/CardFormacao';
// import {
//   CursosContentAbout,
// } from './CursosDetails.styles';
// import * as T from '../../../Styles/texts';
import FirstInfos from './GeneralInfos';
import Conteudo from './Conteudo';
import Programacao from './Programacao';
import HathaYoga from './HathaYoga';
import Yoga from './Yoga';
import LocalData from './LocalData';

export default function CursosInstrutores() {
  // const c = 'cursoInstrutores';
  return (
    <div>
      <Header />
      <Hero />
      <FirstInfos />
      <Yoga back="back" />
      <HathaYoga />
      <Programacao back="back" />
      <Conteudo />
      <LocalData back="back" />
      <Footer />
    </div>
  );
}

import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
// import CardFormacao from '../../components/Cards/CardFormacao';
import { CursosMain } from './CursosPage.styles';

export default function Cursos() {
  return (
    <CursosMain>
      <Header />
      <Hero />
      {/* <CardFormacao /> */}
      <Footer />
    </CursosMain>
  );
}

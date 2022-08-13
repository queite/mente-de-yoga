import React from 'react';
import Header from '../components/Header/Header';
// import { Body } from '../Styles/Generals';
import Footer from '../components/Footer';
import Hero from '../components/Hero/Hero';
import Cursos from '../components/Cursos';
// import Treinamento from '../components/Treinamento';
import Artigos from '../components/Artigos/Artigos';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Cursos />
      {/* <Treinamento /> */}
      <Artigos />
      <Footer position="absolute" />
    </div>
  );
}

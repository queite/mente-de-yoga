import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import Cursos from '../../components/Course/Cursos';
// import Treinamento from '../components/Treinamento';
// import Artigos from '../../components/Artigos/Artigos';
// import Switcher from '../../components/Switcher';
// import Carousel from '../components/Carousel/Carousel';

export default function Home() {
  return (
    <div>
      {/* <Switcher /> */}
      <Header />
      <Hero />
      <Cursos />
      {/* <Treinamento /> */}
      {/* <Artigos /> */}
      {/* <Carousel /> */}
      <Footer position="absolute" />
    </div>
  );
}

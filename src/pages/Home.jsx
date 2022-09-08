import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero/Hero';
import Cursos from '../components/Course/Cursos';
// import Treinamento from '../components/Treinamento';
import Artigos from '../components/Artigos/Artigos';
import Carousel from '../components/Carousel/Carousel';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Cursos />
      {/* <Treinamento /> */}
      <Artigos />
      <Carousel />
      <Footer position="absolute" />
    </div>
  );
}

import React from 'react';
import Header from '../components/Header';
import { Body } from '../Styles/Generals';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Cursos from '../components/Cursos';

export default function Home() {
  return (
    <Body heigth="100vh" color="var(--g12)">
      <Header />
      <Hero />
      <Cursos />
      <Footer position="absolute" />
    </Body>
  );
}

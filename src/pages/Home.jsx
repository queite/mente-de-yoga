import React from 'react';
// import CardComponent from '../components/CardComponent';
import Header from '../components/Header';
import { Body } from '../Styles/Generals';
// import josiana from '../img/josianaHertel.png';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <Body heigth="100vh" color="var(--g12)">
      <Header />
      <Hero />
      {/* <CardComponent img={josiana} nome="Josiana Hertel" id={1} /> */}
      <Footer position="absolute" />
    </Body>
  );
}

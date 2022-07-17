import React from 'react';
import { Body } from '../Styles/Generals';
import profissionais from '../data/profissionais';
import CardComponent from '../components/CardComponent';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Equipe() {
  return (
    <Body>
      <Header />
      {profissionais.map((prof) => (
        <CardComponent key={prof.id} img={prof.foto} nome={prof.nome} id={prof.id} />
      ))}
      <Footer />
    </Body>
  );
}

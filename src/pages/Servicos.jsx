import React from 'react';
import CardComponent from '../components/CardComponent';
import Footer from '../components/Footer';
import Header from '../components/Header';
import servicos from '../data/servicos';
import { Body } from '../Styles/Generals';

export default function Servicos() {
  return (
    <Body>
      <Header />
      {servicos.map((servico) => (
        <CardComponent key={servico.id} img={servico.img} nome={servico.servico} id={servico.id} />
      ))}
      <Footer />
    </Body>
  );
}

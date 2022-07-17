import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Body } from '../Styles/Generals';

export default function ServicosDetalhes() {
  const { id } = useParams();
  return (
    <Body>
      <Header />
      <h1>{id}</h1>
      <p>Detalhes</p>
      <Footer />
    </Body>
  );
}

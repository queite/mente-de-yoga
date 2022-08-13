import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';

export default function Blog() {
  return (
    <div>
      <Header />
      <h1>Artigos</h1>
      {/* {servicos.map((servico) => (
        <CardComponent key={servico.id} img={servico.img} nome={servico.servico} id={servico.id} />
      ))} */}
      <Footer position="absolute" />
    </div>
  );
}

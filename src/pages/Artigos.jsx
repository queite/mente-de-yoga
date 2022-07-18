import React from 'react';
import { Body } from '../Styles/Generals';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Blog() {
  return (
    <Body heigth="100vh" color="var(--g12)">
      <Header />
      <h1>Artigos</h1>
      <Footer position="absolute" />
    </Body>
  );
}

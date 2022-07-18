import React from 'react';
// import CardComponent from '../components/CardComponent';
import Header from '../components/Header';
import { Body } from '../Styles/Generals';
// import josiana from '../img/josianaHertel.png';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <Body heigth="100vh" color="var(--g12)">
      <Header />
      <h1> विरामप्रत्ययाभ्यासपूर्वः संस्कारशेषोऽन्यः</h1>
      <h2>virāmapratyayābhyāsapūrvaḥ saṃskāraśeṣonyaḥ</h2>
      {/* <CardComponent img={josiana} nome="Josiana Hertel" id={1} /> */}
      <Footer position="absolute" />
    </Body>
  );
}

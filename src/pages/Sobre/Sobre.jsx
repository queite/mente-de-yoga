import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import { AboutContent, Img, GeneralInfos } from './Sobre.styles';
// import * as T from '../../Styles/texts';
import tomas from '../../img/tomas4.jpg';

export default function Sobre() {
  return (
    <div>
      <Header />
      <Hero page="sobre" />
      <AboutContent>
        <Img>
          <img src={tomas} alt="hatha" />
          {/* <div /> */}
        </Img>
        <GeneralInfos>
          <h2>TOMAS BREUCKMANN</h2>
          <p>
            Comecei meus estudos da tradição védica através do
            <skr> Yoga </skr>
            em 2011 e desde então venho me dedicando ao aprofundamento teórico e
            prático desta tradição.
          </p>
          <p>
            Sou especialista em
            <skr>Yoga</skr>
            , especialista em Psicologia Corporal, instrutor de
            Ki Aikido, Bacharel em Matemática e Mestre em Matemática Aplicada.
          </p>
        </GeneralInfos>
      </AboutContent>
      <Footer />
    </div>
  );
}

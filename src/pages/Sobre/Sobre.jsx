import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import { AboutContent, Img, GeneralInfos } from './Sobre.styles';
import * as T from '../../Styles/texts';
import tomas from '../../img/tomas4.jpg';

export default function Sobre() {
  const c = 'sobrePage';
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
          <T.H2 infos={c}>TOMAS BREUCKMANN</T.H2>
          <T.P1 infos={c}>
            Comecei meus estudos da tradição védica através do
            <T.St infos={c}> Yoga </T.St>
            em 2011 e desde então venho me dedicando ao aprofundamento teórico e
            prático desta tradição.
          </T.P1>
          <T.P1 infos={c}>
            Sou especialisa em Yoga, especialista em Psicologia Corporal, instrutor de
            Ki Aikido, Bacharel em Matemática e Mestre em Matemática Aplicada.
          </T.P1>
        </GeneralInfos>
      </AboutContent>
      <Footer />
    </div>
  );
}

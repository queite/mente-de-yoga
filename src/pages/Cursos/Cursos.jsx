import React from 'react';
import { useNavigate } from 'react-router-dom';
import hathaImg from '../../data/imagesHero';
// import Formation from '../../components/Course/Formation';
// import CardComponent from '../components/CardComponent';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
// import servicos from '../data/servicos';
// import { Body } from '../Styles/Generals';
import {
  CursosContent,
  CursosMain,
  Text,
  Img,
} from './CursosPage.styles';
import * as T from '../../Styles/texts';
import { Button } from '../../Styles/buttons';

export default function Servicos() {
  const c = 'cursoPage';
  const navigate = useNavigate();
  const getImage = () => {
    const num = Math.floor(Math.random() * (6));
    const image = Object.values(hathaImg)[num];
    return image;
  };
  return (
    <CursosMain>
      <Header />
      <Hero />
      <CursosContent>
        <Text>
          <T.H2 infos={c}>FORMAÇÃO DE INSTRUTORES</T.H2>
          <T.P2 infos={c}>
            Com abordagem no
            <T.St infos={c}> Haṭha Yoga </T.St>
            o curso de
            <T.St infos={c}> Formação de Instrutores </T.St>
            conta com uma carga horária de
            <T.St infos={c}> 200h </T.St>
            e destina-se a toda pessoa interessada em conhecer mais à si mesma,
            e também em conhecer e ensinar esta tradição.
          </T.P2>
          <Button
            infos={c}
            onClick={() => navigate('/cursos')}
          >
            Saiba mais ...
          </Button>
        </Text>
        <Img>
          <img src={getImage()} alt="hatha" />
          <div />
        </Img>
      </CursosContent>
      {/* <CursosContent>
        <Text>
          <H2 infos={c}>MANTRA YOGA</H2>
          <P infos={c}>
            Com abordagem no
            <St infos={c}> Haṭha Yoga </St>
            o curso de
            <St infos={c}> Formação de Instrutores </St>
            conta com uma carga horária de
            <St infos={c}> 200h </St>
            e destina-se a toda pessoa interessada em conhecer mais à si mesma,
            e também em conhecer e ensinar esta tradição.
          </P>
          <Button
            infos={c}
            onClick={() => navigate('/cursos')}
          >
            Saiba mais ...
          </Button>
        </Text>
        <Img>
          <img src={getImage()} alt="hatha" />
          <div />
        </Img>
      </CursosContent> */}

      {/* <Formation /> */}
      <Footer />
    </CursosMain>
  );
}

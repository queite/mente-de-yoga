import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
// import Hero from '../../components/Hero/Hero';
// import CardFormacao from '../../components/Cards/CardFormacao';
import {
  CursosContent, Img, GeneralInfos, LIcon,
} from './CursosDetails.styles';
import getImage from '../../helpers/helpers';
import * as T from '../../Styles/texts';

export default function CursosInstrutores() {
  const c = 'cursoInstrutores';
  return (
    <div>
      <Header />
      {/* <Hero /> */}
      {/* <CursosTitle> */}
      {/* </CursosTitle> */}
      <CursosContent>
        <Img>
          <img src={getImage()} alt="hatha" />
          {/* <div /> */}
        </Img>
        <GeneralInfos>
          <T.H2 infos={c}>FORMAÇÃO DE INSTRUTORES</T.H2>
          <T.H3 infos={c}>com abordagem em Haṭha Yoga</T.H3>
          <T.P3 infos={c}>
            Formação sem pré-requisitos na modalidade de curso livre ,
            indicado para  quem está em busca de conhecimento e tem o
            desejo de se tornar instrutor de Yoga.
          </T.P3>
          <T.P3 infos={c} detach>
            Presencial com início no dia 25 e 26 de Fevereiro de 2023 em Passo Fundo.
          </T.P3>
          <ul>
            <T.Li infos={c}>
              <LIcon />
              Curso Completo Com Certificação.
            </T.Li>
            <T.Li infos={c}>
              <LIcon />
              Conteúdo digital e impresso.
            </T.Li>
            <T.Li infos={c}>
              <LIcon />
              Materiais para aulas práticas em sala de aula.
            </T.Li>
            <T.Li infos={c}>
              <LIcon />
              Uma camiseta Personalizada da Turma de Instrutores.
            </T.Li>
            <T.Li infos={c}>
              <LIcon />
              Um tapete para suas práticas em Sala de aula (ao final do cursos ele será seu).
            </T.Li>
          </ul>
        </GeneralInfos>
        {/* <CardFormacao /> */}
      </CursosContent>
      <Footer />
    </div>
  );
}

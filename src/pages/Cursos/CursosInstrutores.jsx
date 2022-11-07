import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
// import Hero from '../../components/Hero/Hero';
// import CardFormacao from '../../components/Cards/CardFormacao';
import {
  CursosContent, Img, GeneralInfos, LIcon, CursosContentAbout,
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
      <CursosContentAbout>
        <T.H2 infos={c}>Informações</T.H2>
        <T.P3 infos={c}>
          Formação de Instrutores de Yoga  acalme sua mente,
          liberte-se  e conquiste mais disposição no seu dia a dia.
          Formação de Instrutores a arte de trabalhar o corpo e a mente de forma interligada,
          como a música, o ritmo do corpo, a melodia da mente, e a harmonia da alma,
          criando a sinfonia de vida. Em outras palavras,
          Yoga é a arte de moderar os sentimentos nas ações
          e buscar a felicidade dos sentidos pela concentração correta.
        </T.P3>
        <T.H3 infos={c}>Por que fazer yoga ?</T.H3>
        <T.P3 infos={c}>
          Essa disciplina de prática física e mental se originou na Índia há cerca de 5000 anos.
          A palavra yoga significa união e refere-se à conexão entre corpo, mente e espírito.
          Existem muitos tipos de yoga, podendo variar entre aulas relaxantes ou mais dinâmicas,
          que exigem mais do corpo fisicamente, mas uma coisa é certa:
          seja qual for o estilo que você escolher praticar, ele melhorará
          sua saúde incrivelmente.
        </T.P3>
        <T.P3 infos={c}>
          Se você acha que o yoga é apenas tocar os dedos dos pés ou ficar de cabeça para baixo,
          isso significa que você está perdendo o melhor do yoga.
          As técnicas mais comuns praticadas no yoga são posturas (asanas em sânscrito),
          exercícios respiratórios (pranayamas em sânscrito) e meditação.
        </T.P3>
        <T.P3 infos={c}>
          Se praticado regularmente, o yoga mantém você mais saudável.
          Pode ajudar também com que os problemas e dores desapareçam,
          evita o surgimento de doenças relacionadas ao desequilíbrio corporal,
          proporciona maior clareza mental, equilibra as emoções e muito mais.
        </T.P3>
        <T.P3 infos={c}>
          Em conclusão, Yoga é a arte de trabalhar o corpo e a mente de moderar os
          sentimentos nas ações e buscar a felicidade dos sentidos pela concentração correta.
        </T.P3>
        <T.P3 infos={c}>
          Formação sem pré-requisitos na modalidade de curso livre é indicado
          para quem está em busca de conhecimento e tem o desejo de se tornar instrutor de Yoga,
          vivenciando uma profissão repleta de qualidade de vida e satisfação pessoal.
        </T.P3>
        <T.P3 infos={c}>
          É indicado também para aqueles que já ministram aulas de Yoga
          e buscam um aprimoramento profissional.
        </T.P3>
        <T.H3 infos={c}>Haṭha yoga?</T.H3>
        <T.P3 infos={c}>
          Hatha Yoga é a busca do equilíbrio entre as forças solar e lunar,
          respectivamente das energias masculina e feminina – que não tem a ver com
          identificação sexual. Isto é conseguido através da união da mente com a alma.
          A palavra Hatha é dividida em:
        </T.P3>
        <ul>
          <T.Li infos={c}>
            <LIcon />
            Ha significa sol e é representado pelo sol do seu corpo, a sua alma.
          </T.Li>
          <T.Li infos={c}>
            <LIcon />
            Tha significa lua, que representa a sua consciência, a sua mente.
          </T.Li>
        </ul>
        <T.P3 infos={c}>
          Uma das características do Hatha Yoga é a plena atenção na ação.
          Ou seja, se você está fazendo um asana (postura física) deve estar
          totalmente presente em todas as fases, que são: entrada, permanência e saída.
          Se você está praticando um pranayama (exercício respiratório),
          no Hatha Yoga deve-se estar com plena atenção à respiração.
        </T.P3>
        <ul>
          <T.Li infos={c}>
            <LIcon />
            O hatha yoga tem sua ênfase nos asanas (posturas) e
            pranayamas (técnicas de respiração)
          </T.Li>
          <T.Li infos={c}>
            <LIcon />
            O hatha Yoga é base para todos os métodos que existem.
          </T.Li>
          <T.Li infos={c}>
            <LIcon />
            Método indicado para todas as idades.
          </T.Li>
        </ul>
        <T.H3 infos={c}>
          Benefícios:
        </T.H3>
        <ul>
          <T.Li infos={c}>
            <LIcon />
            Melhora o foco e concentração.
          </T.Li>
          <T.Li infos={c}>
            <LIcon />
            Os Asanas promovem efeito calmante e relaxante reduzindo a tensão muscular.
          </T.Li>
          <T.Li infos={c}>
            <LIcon />
            Alinha a postura promovendo o alívio das dores.
          </T.Li>
          <T.Li infos={c}>
            <LIcon />
            Trabalha o alinhamento dos chakras trazendo o equilíbrio entre o corpo,
            mente e alma
          </T.Li>
          <T.Li infos={c}>
            <LIcon />
            Promove sua consciência corporal, aumentando seu autoconhecimento e
            autoestima.
          </T.Li>
        </ul>
      </CursosContentAbout>
      <Footer />
    </div>
  );
}

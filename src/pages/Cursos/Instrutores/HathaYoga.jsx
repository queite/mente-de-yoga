import React from 'react';
import {
  CursosContentAbout, LIcon,
} from './CursosDetails.styles';
import * as T from '../../../Styles/texts';

export default function HathaYoga() {
  const c = 'cursoInstrutores';
  return (
    <CursosContentAbout>
      <T.H3 infos={c} detach>Haṭha yoga?</T.H3>
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
      <T.H4 infos={c}>
        Benefícios:
      </T.H4>
      <ul>
        <T.Li infos={c}>
          <LIcon />
          A pratica de āsana desenvolve sthira, a estabilidade. Seu corpo fica forte,
          flexível e resistente.
        </T.Li>
        <T.Li infos={c}>
          <LIcon />
          Melhora o foco e concentração.
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
  );
}

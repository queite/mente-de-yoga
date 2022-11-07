import React from 'react';
import {
  CursosContentAbout,
} from './CursosDetails.styles';
import * as T from '../../../Styles/texts';

export default function Yoga() {
  const c = 'cursoInstrutores';
  return (
    <CursosContentAbout>
      <T.H3 infos={c} detach>Por que fazer yoga ?</T.H3>
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
    </CursosContentAbout>
  );
}

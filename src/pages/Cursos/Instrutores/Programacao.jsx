import React from 'react';
import {
  CursosContentAbout, LIcon,
} from './CursosDetails.styles';
import * as T from '../../../Styles/texts';

export default function Conteudo() {
  const c = 'cursoInstrutores';
  return (
    <CursosContentAbout>
      <T.H3 infos={c} detach>Programação:</T.H3>

      <T.P3 infos={c}>Carga horária: 200 h/aula</T.P3>

      <T.H4 infos={c}>Encontros:</T.H4>

      <ul>
        <T.Li infos={c}>
          <LIcon />
          10 encontros presenciais de sábado e domingo – Totalizando 120h
        </T.Li>
        <T.Li infos={c}>
          <LIcon />
          Atividades Individuais a serem realizadas online com
          acompanhamento do professor – Totalizando 80hs
        </T.Li>
      </ul>
      <T.H4 infos={c}>Material incluso:</T.H4>
      <ul>
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
          Uma camiseta Personalizada
        </T.Li>
        <T.Li infos={c}>
          <LIcon />
          Um tapete para suas práticas em Sala de aula – Ao final do cursos ele será seu.
        </T.Li>
        <T.Li infos={c}>
          <LIcon />
          Um livro.
        </T.Li>
      </ul>
      {' '}
      {/* <CardFormacao /> */}
    </CursosContentAbout>
  );
}

import React from 'react';
import {
  CursosContentAbout, CursosMain,
} from './CursosDetails.styles';
import * as T from '../../../Styles/texts';

// eslint-disable-next-line react/prop-types
export default function Conteudo({ back }) {
  const c = 'cursoInstrutores';
  return (
    <CursosMain back={back}>
      <CursosContentAbout>
        <T.H3 infos={c} detach>Programação:</T.H3>
        <T.P3 infos={c}>Carga horária: 200 h/aula</T.P3>
        <T.H4 infos={c}>Encontros:</T.H4>
        <T.Ul>
          <T.Li infos={c}>
            <T.LIcon />
            10 encontros presenciais de sábado e domingo – Totalizando 120h
          </T.Li>
          <T.Li infos={c}>
            <T.LIcon />
            Atividades Individuais a serem realizadas online com
            acompanhamento do professor – Totalizando 80hs
          </T.Li>
        </T.Ul>
        <T.H4 infos={c}>Material incluso:</T.H4>
        <T.Ul>
          <T.Li infos={c}>
            <T.LIcon />
            Conteúdo digital e impresso.
          </T.Li>
          <T.Li infos={c}>
            <T.LIcon />
            Materiais para aulas práticas em sala de aula.
          </T.Li>
          <T.Li infos={c}>
            <T.LIcon />
            Uma camiseta Personalizada
          </T.Li>
          <T.Li infos={c}>
            <T.LIcon />
            Um tapete para suas práticas em Sala de aula – Ao final do cursos ele será seu.
          </T.Li>
          <T.Li infos={c}>
            <T.LIcon />
            Um livro.
          </T.Li>
        </T.Ul>
        {' '}
        {/* <CardFormacao /> */}
      </CursosContentAbout>
    </CursosMain>
  );
}

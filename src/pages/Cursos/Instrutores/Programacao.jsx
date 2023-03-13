import React from 'react';
import {
  CursosContentAbout, CursosMain,
} from './CursosDetails.styles';
import * as T from '../../../Styles/texts';

// eslint-disable-next-line react/prop-types
export default function Conteudo({ back }) {
  // const c = 'cursoInstrutores';
  return (
    <CursosMain back={back}>
      <CursosContentAbout>
        <T.H3 detach>Programação:</T.H3>
        {/* <p>Carga horária: 240 h/aula</p> */}
        <h4>Encontros:</h4>
        <ul>
          <li>
            <T.LIcon />
            10 encontros presenciais de sábado e domingo – Totalizando 120h
          </li>
          <li>
            <T.LIcon />
            Atividades Individuais a serem realizadas online com
            acompanhamento do professor – Totalizando 120hs
          </li>
        </ul>
        <h4>Material incluso:</h4>
        <ul>
          <li>
            <T.LIcon />
            Conteúdo digital e impresso.
          </li>
          <li>
            <T.LIcon />
            Materiais para aulas práticas em sala de aula.
          </li>
          {/* <T.Li infos={c}>
            <T.LIcon />
            Uma camiseta Personalizada
          </T.Li>
          <T.Li infos={c}>
            <T.LIcon />
            Um tapete para suas práticas em Sala de aula – Ao final do cursos ele será seu.
          </T.Li> */}
          {/* <T.Li infos={c}>
            <T.LIcon />
            Um livro.
          </T.Li> */}
        </ul>
        {' '}
        {/* <CardFormacao /> */}
      </CursosContentAbout>
    </CursosMain>
  );
}

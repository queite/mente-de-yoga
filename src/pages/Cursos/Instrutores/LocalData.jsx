import React from 'react';
import {
  CursosContentAbout, CursosMain, A,
} from './CursosDetails.styles';
import * as T from '../../../Styles/texts';

// eslint-disable-next-line react/prop-types
export default function LocalData({ back }) {
  // console.log('YOGA PROP', back);
  const c = 'cursoInstrutores';
  return (
    <CursosMain back={back}>
      <CursosContentAbout>
        <T.H3 infos={c} detach>Local e data</T.H3>
        <T.H4 infos={c}>
          Cethise
          <T.P3 infos={c}>
            Centro de Ensino em Terapias Holísticas, Integrativas,
            Saúde e Estética – Passo Fundo RS.
          </T.P3>
          <T.Ul>
            <T.Li infos={c}>
              <T.LIcon />
              Início dias 24 e 25 de fevereiro de 2023
            </T.Li>
          </T.Ul>
          <T.P3 infos={c}>
            Clique
            {' '}
            <A
              target="_blank"
              rel="noreferrer"
              href="https://cethiseensino.com.br/produto/formacao-de-instrutores-de-yoga/"
            >
              <T.St infos={c}>aqui</T.St>
            </A>
            {' '}
            para maiores informações quanto a calendário e valores.
          </T.P3>
        </T.H4>

        <T.H4 infos={c}>
          Arcturus
          <T.P3 infos={c}>
            Terapia e Treinamentos – Erechim RS.
          </T.P3>
          <T.Ul>
            <T.Li infos={c}>
              <T.LIcon />
              Início dias 20 e 21 de maio de 2023
            </T.Li>
          </T.Ul>
          <T.P3 infos={c}>
            Clique
            {' '}
            <A
              target="_blank"
              rel="noreferrer"
              href="https://arcturusterapias.com.br"
            >
              <T.St infos={c}>aqui</T.St>
            </A>
            {' '}
            para maiores informações quanto a calendário e valores.
          </T.P3>
        </T.H4>
      </CursosContentAbout>
    </CursosMain>
  );
}

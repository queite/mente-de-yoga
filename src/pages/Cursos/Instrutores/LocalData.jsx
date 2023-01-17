import React from 'react';
import {
  CursosContentAbout, CursosMain, A, Locals,
} from './CursosDetails.styles';
import * as T from '../../../Styles/texts';
import * as G from '../../../Styles/Generals';

// eslint-disable-next-line react/prop-types
export default function LocalData({ back }) {
  // console.log('YOGA PROP', back);
  const c = 'cursoInstrutores';
  return (
    <CursosMain back={back} id="localdata">
      <CursosContentAbout>
        <T.H3 detach>Locais e datas</T.H3>
        <Locals>
          <G.BasicCard>
            <h4>
              Cethise
            </h4>
            <p>
              Centro de Ensino em Terapias Holísticas, Integrativas,
              Saúde e Estética – Passo Fundo RS.
            </p>
            <T.Ul>
              <li>
                <T.LIcon />
                Escola registrada na OSCIP sob n° 443.
              </li>
              <li>
                <T.LIcon />
                Início dias 25 e 26 de fevereiro de 2023
              </li>
            </T.Ul>
            <A
              target="_blank"
              rel="noreferrer"
              href="https://cethiseensino.com.br/produto/formacao-de-instrutores-de-yoga/"
            >
              <str>Saiba mais ...</str>
            </A>
          </G.BasicCard>
          <G.BasicCard>
            <T.H4 infos={c}>
              Arcturus
            </T.H4>
            <p>
              Terapia e Treinamentos – Erechim RS.
            </p>
            <T.Ul>
              <li>
                <T.LIcon />
                Início dias 20 e 21 de maio de 2023
              </li>
            </T.Ul>
            <A
              target="_blank"
              rel="noreferrer"
              href="https://arcturusterapias.com.br"
            >
              <str>Saiba mais ...</str>
            </A>
          </G.BasicCard>
        </Locals>
      </CursosContentAbout>
    </CursosMain>
  );
}

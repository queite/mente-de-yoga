import React from 'react';
import {
  CursosContentAbout, LIcon, OIcon, Ul,
} from './CursosDetails.styles';
import * as T from '../../../Styles/texts';

export default function Conteudo() {
  const c = 'cursoInstrutores';
  return (
    <CursosContentAbout>
      <T.H3 infos={c} detach>Conteúdo</T.H3>
      <Ul>
        <T.Li infos={c}>
          <LIcon />
          Contextualização Histórica do Yoga.
        </T.Li>
        <T.Li infos={c}>
          <LIcon />
          As origens e os fundamentos do Haṭha Yoga.
          <Ul>
            <T.Li infos={c}>
              <OIcon />
              Os upaniṣads do Yoga.
            </T.Li>
            <T.Li infos={c}>
              <OIcon />
              O yoga de Patañjali.
            </T.Li>
            <T.Li infos={c}>
              <OIcon />
              O movimento Siddha.
            </T.Li>
            <T.Li infos={c}>
              <OIcon />
              Anatomia energética.
            </T.Li>
          </Ul>
        </T.Li>
        <T.Li infos={c}>
          <LIcon />
          Os principais elementos do Haṭha Yoga e suas funções.
          <Ul>
            <T.Li infos={c}>
              <OIcon />
              Āsana (posturas).
            </T.Li>
            <T.Li infos={c}>
              <OIcon />
              Prāṇāyāma (respirações).
            </T.Li>
            <T.Li infos={c}>
              <OIcon />
              Mudrā (selos).
            </T.Li>
            <T.Li infos={c}>
              <OIcon />
              Dhyāna (meditação).
            </T.Li>
          </Ul>
        </T.Li>
        <T.Li infos={c}>
          <LIcon />
          Temas complementares.
          <Ul>
            <T.Li infos={c}>
              <OIcon />
              Introdução ao Ayurveda.
            </T.Li>
            <T.Li infos={c}>
              <OIcon />
              Mantra yoga.
            </T.Li>
            <T.Li infos={c}>
              <OIcon />
              A diversidade do Yoga.
            </T.Li>
          </Ul>
        </T.Li>
        <T.Li infos={c}>
          <LIcon />
          Metodologia de ensino do Yoga.
          <Ul>
            <T.Li infos={c}>
              <OIcon />
              Aulas individuais.
            </T.Li>
            <T.Li infos={c}>
              <OIcon />
              Aulas em grupo.
            </T.Li>
            <T.Li infos={c}>
              <OIcon />
              Públicos diversos: idosos, crianças, gestantes, obesos.
            </T.Li>
          </Ul>
        </T.Li>
      </Ul>
      {/* <CardFormacao /> */}
    </CursosContentAbout>
  );
}

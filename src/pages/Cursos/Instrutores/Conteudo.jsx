import React from 'react';
import {
  CursosContentAbout,
} from './CursosDetails.styles';
import * as T from '../../../Styles/texts';

export default function Conteudo() {
  const c = 'cursoInstrutores';
  return (
    <CursosContentAbout>
      <T.H3 infos={c} detach>Conteúdo</T.H3>
      <T.Ul>
        <T.Li infos={c}>
          <T.LIcon />
          Contextualização Histórica do Yoga.
        </T.Li>
        <T.Li infos={c}>
          <T.LIcon />
          As origens e os fundamentos do Haṭha Yoga.
          <T.Ul>
            <T.Li infos={c}>
              <T.OIcon />
              Os upaniṣads do Yoga.
            </T.Li>
            <T.Li infos={c}>
              <T.OIcon />
              O yoga de Patañjali.
            </T.Li>
            <T.Li infos={c}>
              <T.OIcon />
              O movimento Siddha.
            </T.Li>
            <T.Li infos={c}>
              <T.OIcon />
              Anatomia energética.
            </T.Li>
          </T.Ul>
        </T.Li>
        <T.Li infos={c}>
          <T.LIcon />
          Os principais elementos do Haṭha Yoga e suas funções.
          <T.Ul>
            <T.Li infos={c}>
              <T.OIcon />
              Āsana (posturas).
            </T.Li>
            <T.Li infos={c}>
              <T.OIcon />
              Prāṇāyāma (respirações).
            </T.Li>
            <T.Li infos={c}>
              <T.OIcon />
              Mudrā (selos).
            </T.Li>
            <T.Li infos={c}>
              <T.OIcon />
              Dhyāna (meditação).
            </T.Li>
          </T.Ul>
        </T.Li>
        <T.Li infos={c}>
          <T.LIcon />
          Temas complementares.
          <T.Ul>
            <T.Li infos={c}>
              <T.OIcon />
              Introdução ao Ayurveda.
            </T.Li>
            <T.Li infos={c}>
              <T.OIcon />
              Mantra yoga.
            </T.Li>
            <T.Li infos={c}>
              <T.OIcon />
              A diversidade do Yoga.
            </T.Li>
          </T.Ul>
        </T.Li>
        <T.Li infos={c}>
          <T.LIcon />
          Metodologia de ensino do Yoga.
          <T.Ul>
            <T.Li infos={c}>
              <T.OIcon />
              Aulas individuais.
            </T.Li>
            <T.Li infos={c}>
              <T.OIcon />
              Aulas em grupo.
            </T.Li>
            <T.Li infos={c}>
              <T.OIcon />
              Públicos diversos: idosos, crianças, gestantes, obesos.
            </T.Li>
          </T.Ul>
        </T.Li>
      </T.Ul>
      {/* <CardFormacao /> */}
    </CursosContentAbout>
  );
}

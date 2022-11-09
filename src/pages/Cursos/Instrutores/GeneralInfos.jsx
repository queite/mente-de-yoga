import React from 'react';
import {
  CursosContent, Img, GeneralInfos,
} from './CursosDetails.styles';
import getImage from '../../../helpers/helpers';
import * as T from '../../../Styles/texts';

export default function FirstInfos() {
  const c = 'cursoInstrutores';
  return (
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
        {/* <T.P3 infos={c} detach>
          Presencial com início no dia 25 e 26 de Fevereiro de 2023 em Passo Fundo.
        </T.P3> */}
        <T.Ul>
          <T.Li infos={c}>
            <T.LIcon />
            Curso Completo Com Certificação.
          </T.Li>
          <T.Li infos={c}>
            <T.LIcon />
            Escola registrada na OSCIP sob n° 443.
          </T.Li>
          <T.Li infos={c}>
            <T.LIcon />
            Conteúdo digital e impresso.
          </T.Li>
          <T.Li infos={c}>
            <T.LIcon />
            Você ganha:
          </T.Li>
        </T.Ul>
        <T.UlSub>
          <T.Li infos={c}>
            <T.OIcon />
            Um livro.
          </T.Li>
          <T.Li infos={c}>
            <T.OIcon />
            Uma camiseta Personalizada da Turma de Instrutores.
          </T.Li>
          <T.Li infos={c}>
            <T.OIcon />
            Um tapete para suas práticas em Sala de aula que será seu
            ao final do curso.
          </T.Li>
        </T.UlSub>

      </GeneralInfos>
      {/* <CardFormacao /> */}
    </CursosContent>
  );
}

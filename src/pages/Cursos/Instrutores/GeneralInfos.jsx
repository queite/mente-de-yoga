import React from 'react';
import * as C from './GeneralInfos.styles';
import getImage from '../../../helpers/helpers';
import * as T from '../../../Styles/texts';

export default function GeneralInfos() {
  return (
    <C.CursosContent>
      <C.Img>
        <img src={getImage('general')} alt="hatha" />
      </C.Img>
      <C.GeneralInfos>
        <h2>FORMAÇÃO DE INSTRUTORES</h2>
        <h3>com abordagem em Haṭha Yoga</h3>
        <p>
          Formação sem pré-requisitos na modalidade de curso livre,
          indicado para quem está em busca de conhecer a si mesmo, de conhecer
          e também de ensinar esta tradição.
        </p>
        <ul>
          <li>
            <T.LIcon />
            Curso Completo com Certificação.
          </li>
          <li>
            <T.LIcon />
            Conteúdo digital e impresso.
          </li>
          <li>
            <T.LIcon />
            Carga horária de 240h.
          </li>
        </ul>
        <p>
          O curso usa Metodologias Ágeis que valorizam a colaboração, o
          protagonismo, a autogestão, a adaptação e principalmente o crescimento
          contínuo e personalizado, preparando assim os alunos para lidar com os
          desafios que irá encontrar e para responder adequadamente à diversidade de contextos.
        </p>
      </C.GeneralInfos>
    </C.CursosContent>
  );
}

import React from 'react';
import { H1, H2 } from '../../Styles/texts';
import { FormationMain, FormationContent } from './Formation.styles';

export default function Formation() {
  const pag = 'formationComponent';
  return (
    <FormationMain>
      <FormationContent>
        <H1 infos={pag}>Formação de Instrutores</H1>
        <H2 infos={pag}>com abordagem em Haṭha Yoga</H2>
      </FormationContent>
    </FormationMain>
  );
}

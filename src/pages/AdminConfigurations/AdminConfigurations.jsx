import React from 'react';
import { AdminMain, AdminContent } from './AdminConfigurations.styles';
import { Button } from '../../Styles/buttons';
import { P } from '../../Styles/texts';
import Switcher from '../../components/Switcher';

export default function AdminConfigurations() {
  const adm = 'adminPageConfigs';
  return (
    <AdminMain>
      <Switcher />
      <AdminContent>
        <div>
          <Button infos={adm} type="button">Alunos</Button>
          <Button infos={adm} type="button">Sutras</Button>
          <Button infos={adm} type="button">Vocabulário</Button>
          <Button infos={adm} type="button">Artigos</Button>
        </div>
        <div>
          <P infos={adm}>sutra 1</P>
          <p>sutra 1</p>
          <p>sutra 1</p>
          <p>sutra 1</p>
        </div>
      </AdminContent>
    </AdminMain>
  );
}

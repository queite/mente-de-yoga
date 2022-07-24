import React from 'react';
import {
  MainHeader,
  LogoNome,
  ContentHeader,
  Menu,
} from './Header.styles';
import logoG from '../img/LogoYogaGold.png';

export default function Header() {
  return (
    <MainHeader>
      <ContentHeader>
        <LogoNome>
          <img src={logoG} alt="logo gold" />
          <h1>Mente de Yoga</h1>
        </LogoNome>
        <Menu>
          <p>CURSOS</p>
          <p>TREINAMENTOS</p>
          <p>BLOG</p>
          <p>SOBRE</p>
        </Menu>
      </ContentHeader>
    </MainHeader>
  );
}

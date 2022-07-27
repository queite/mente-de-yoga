import React from 'react';
// import { Link } from 'react-router-dom';
import {
  MainHeader,
  LogoNome,
  ContentHeader,
  Menu,
  StLink,
} from './Header.styles';
import { Title } from '../Styles/Generals';
import logoG from '../img/LogoYogaGold.png';

export default function Header() {
  return (
    <MainHeader>
      <ContentHeader>
        <LogoNome>
          <img src={logoG} alt="logo gold" />
          <Title color="g6" size="32">Mente de Yoga</Title>
        </LogoNome>
        <Menu>
          <StLink to="/cursos">CURSOS</StLink>
          <p>TREINAMENTOS</p>
          <p>ARTIGOS</p>
          <p>SOBRE</p>
        </Menu>
      </ContentHeader>
    </MainHeader>
  );
}

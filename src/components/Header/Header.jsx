import React from 'react';
// import { Link } from 'react-router-dom';
import {
  MainHeader,
  LogoNome,
  ContentHeader,
  Menu,
  StLink,
  HomeLink,
} from './Header.styles';
import { Title } from '../../Styles/texts';
import logoG from '../../img/LogoYogaGold.png';

export default function Header() {
  return (
    <MainHeader>
      <ContentHeader>
        <LogoNome>
          <HomeLink to="/">
            <img src={logoG} alt="logo gold" />
          </HomeLink>
          <Title type="Header">Mente de Yoga</Title>
        </LogoNome>
        <Menu>
          <StLink to="/cursos">CURSOS</StLink>
          {/* <StLink to="/treinamentos">TREINAMENTOS</StLink> */}
          <StLink to="/artigos">ARTIGOS</StLink>
          <StLink to="/sobre">SOBRE</StLink>
        </Menu>
      </ContentHeader>
    </MainHeader>
  );
}

import React from 'react';
import {
  MainHeader,
  LogoNome,
  ContentHeader,
  Menu,
  StLink,
  HomeLink,
  Img,
} from './Header.styles';
// import Fonts from '../General/Fonts';
// import logoG from '../../img/LogoYogaGold.png';
// import { headerDark } from './HeaderInfos';
import { Title } from '../../Styles/texts';

export default function Header() {
  return (
    <MainHeader>
      <ContentHeader>
        <LogoNome>
          <HomeLink to="/">
            {/* <img src="" alt="logo gold" /> */}
            <Img />
          </HomeLink>
          <Title infos="header">MENTE DE YOGA</Title>
        </LogoNome>
        <Menu>
          <StLink to="/cursos">CURSOS</StLink>
          {/* <StLink to="/treinamentos">TREINAMENTOS</StLink> */}
          <StLink to="/artigos">ARTIGOS</StLink>
          <StLink to="/alunos">ALUNOS</StLink>
          <StLink to="/sobre">SOBRE</StLink>
        </Menu>
      </ContentHeader>
    </MainHeader>
  );
}

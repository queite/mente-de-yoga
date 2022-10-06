import React from 'react';
import {
  MainHeader,
  LogoNome,
  ContentHeader,
  Menu,
  StLink,
  HomeLink,
} from './Header.styles';
import TitleH from '../TitleH';
import logoG from '../../img/LogoYogaGold.png';
import { headerDark } from './HeaderInfos';

export default function Header() {
  return (
    <MainHeader>
      <ContentHeader>
        <LogoNome>
          <HomeLink to="/">
            <img src={logoG} alt="logo gold" />
          </HomeLink>
          <TitleH infos={headerDark} />
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

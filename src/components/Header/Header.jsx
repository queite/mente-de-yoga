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
import * as Text from '../../Styles/texts';
// import Switcher from '../Switcher';

export default function Header() {
  const c = 'header';
  return (
    <MainHeader>
      {/* <Switcher /> */}
      <ContentHeader>
        <LogoNome>
          <HomeLink to="/">
            {/* <img src="" alt="logo gold" /> */}
            <Img />
          </HomeLink>
          <Text.H2 infos={c}>MENTE DE YOGA</Text.H2>
        </LogoNome>
        <Menu>
          <StLink to="/">FORMAÇÃO DE INSTRUTORES</StLink>
          {/* <StLink to="/treinamentos">TREINAMENTOS</StLink> */}
          <StLink to="/artigos">ARTIGOS</StLink>
          <StLink to="/alunos">ALUNOS</StLink>
          <StLink to="/sobre">SOBRE</StLink>
          <a href="#footer">
            CONTATOS
          </a>
          {/* <StLink>
            <a href="#footer">CONTATOS</a>
          </StLink> */}
        </Menu>
      </ContentHeader>
    </MainHeader>
  );
}

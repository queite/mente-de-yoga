import React from 'react';
import { Container, Menu } from './LateralMenu.styles';
import { StyleLink } from '../Styles/Generals';

// eslint-disable-next-line react/prop-types
export default function LateralMenu({ menu }) {
  return (
    <Container menu={menu}>
      <Menu>
        {/* <StyleLink to="/">
          HOME
        </StyleLink> */}
        <StyleLink to="/cursos">
          CURSOS
        </StyleLink>
        <StyleLink to="/artigos">
          ARTIGOS
        </StyleLink>
        <StyleLink to="/contato">
          CONTATO
        </StyleLink>
        <StyleLink to="/sobre">
          SOBRE
        </StyleLink>
      </Menu>
    </Container>
  );
}

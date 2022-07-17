import React from 'react';
import { Container, Menu } from './LateralMenu.styles';
import { StyleLink } from '../Styles/Generals';

// eslint-disable-next-line react/prop-types
export default function LateralMenu({ menu }) {
  return (
    <Container menu={menu}>
      <Menu>
        <StyleLink to="/">
          HOME
        </StyleLink>
        <StyleLink to="/servicos">
          SERVIÇOS
        </StyleLink>
        <StyleLink to="/equipe">
          EQUIPE
        </StyleLink>
        <StyleLink to="/blog">
          BLOG
        </StyleLink>
        <StyleLink to="/galeria">
          GALERIA
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

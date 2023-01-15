import React from 'react';
import { Container, Menu } from './LateralMenu.styles';
// import { StyleLink } from '../Styles/Generals';

// eslint-disable-next-line react/prop-types
export default function LateralMenu({ menu }) {
  return (
    <Container menu={menu}>
      <Menu>
        {/* <StyleLink to="/">
          HOME
        </StyleLink> */}
      </Menu>
    </Container>
  );
}

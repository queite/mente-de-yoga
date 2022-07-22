/* eslint-disable react/jsx-indent */
import React from 'react';
// import React, { useState } from 'react';
import {
  MainHeader,
  // MenuIcons, Fold, Unfold,
  LogoNome,
} from './Header.styles';
// import LateralMenu from './LateralMenu';
import logoG from '../img/LogoYogaGold.png';

export default function Header() {
  // const [menu, setMenu] = useState(false);

  // const handleMenu = () => {
  //   setMenu(!menu);
  // };

  return (
    <MainHeader>
      {/* <LateralMenu menu={menu} /> */}
        <a href="/">
          <LogoNome>
          <img src={logoG} alt="logo gold" />
          <p>Mente de Yoga</p>
          </LogoNome>
        </a>
      {/* <MenuIcons>
        {
          // eslint-disable-next-line react/jsx-wrap-multilines
          menu ? <Unfold
            onClick={() => handleMenu()}
            cursor="pointer"
          // eslint-disable-next-line react/jsx-wrap-multilines
          /> : <Fold
            onClick={() => handleMenu()}
            cursor="pointer"
          />
        }
      </MenuIcons> */}
      {/* <StyleBiMenu /> */}
    </MainHeader>
  );
}

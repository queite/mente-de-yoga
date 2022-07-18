import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import {
  MainHeader, MenuIcons, Fold, Unfold,
} from './Header.styles';
// import { StyleBiMenu } from '../Styles/Generals';
import LateralMenu from './LateralMenu';
import logoG from '../img/LogoYogaGold.png';

export default function Header() {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <MainHeader>
      <LateralMenu menu={menu} />
      <a href="/">
        <img src={logoG} alt="logo gold" />
      </a>
      <p>Mente de Yoga</p>
      <MenuIcons>
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
      </MenuIcons>
      {/* <StyleBiMenu /> */}
    </MainHeader>
  );
}

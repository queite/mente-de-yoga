import React, { useState } from 'react';
import logo from '../img/logosemicone.png';
import {
  MainHeader, MenuIcons, Fold, Unfold,
} from './Header.styles';
// import { StyleBiMenu } from '../Styles/Generals';
import LateralMenu from './LateralMenu';

export default function Header() {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <MainHeader>
      <LateralMenu menu={menu} />
      <img src={logo} alt="logo" width="150px" />
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

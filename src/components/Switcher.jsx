import React, { useContext } from 'react';
import Switch from 'react-switch';
import styled from 'styled-components';
import Context from '../context/context';

const SwitchStyle = styled(Switch)`
  /* position: absolute; */
  /* top: 60px; */
  /* margin-right: 20px; */
  `;

const Div = styled.div`
  position: fixed;
  top: 20px;
  z-index: 100;
  right: 20px;
`;

function Switcher() {
  const { theme, changeTheme } = useContext(Context);
  return (
    <Div>
      <SwitchStyle
        onChange={() => changeTheme()}
        checked={theme === 'light'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={12}
        width={32}
        handleDiameter={16}
        offColor="#777"
        onColor="#777"
        //   onHandleColor={ changeThemeButton.color }
        //   offHandleColor={ changeThemeButton.color }
      />
    </Div>
  );
}

export default Switcher;

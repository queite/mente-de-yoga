import React, { useState } from 'react';
import Context from './context';
import dark from '../Styles/dark';

// eslint-disable-next-line react/prop-types
function Provider({ children }) {
  const [theme, setTheme] = useState('light');
  const [themeInfos, setThemeInfos] = useState(dark);
  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    setThemeInfos(dark);
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const send = { theme, changeTheme, themeInfos };

  return (
    <Context.Provider
      value={send}
    >
      {children}
    </Context.Provider>
  );
}

export default Provider;

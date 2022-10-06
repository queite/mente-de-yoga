import React, { useState } from 'react';
import Context from './context';

// eslint-disable-next-line react/prop-types
function Provider({ children }) {
  const [theme, setTheme] = useState('light');
  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const send = { theme, changeTheme };

  return (
    <Context.Provider
      value={send}
    >
      {children}
    </Context.Provider>
  );
}

export default Provider;

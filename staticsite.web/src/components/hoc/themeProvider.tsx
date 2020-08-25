import React, { useState } from 'react';
import { ThemeContext } from 'src/context/ThemeContext';

const settings: { dark: {}, light: {} } = {
  dark: {
    background: '#222222',
    fontColor: '#f0f0f0',
    inputBackgroundColor: 'grey',
    cardBackground: '#1b1c1d',
  },
  light: {
    background: '#f0f0f0',
    fontColor: '#444444',
    inputBackgroundColor: '#ffffff',
    cardBackground: '#ffffff',
  },
}

export const ThemeProvider: React.FC = ({ children }): JSX.Element => {
  const [theme, setTheme] = useState<'dark' | 'light'>(
    (localStorage.getItem('us.theme') as 'light' | 'dark') || 'light'
  );

  const toggleTheme = (): void => {
    const val = theme === 'dark' ? 'light' : 'dark';
    setTheme(val);
    localStorage.setItem('ui.theme', val);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, settings:settings[theme] }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

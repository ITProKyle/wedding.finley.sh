import React from 'react';

type ContextType = {
  theme: 'dark' | 'light',
  settings: { [key: string] : string },
  toggleTheme: () => void
}

export const ThemeContext = React.createContext<ContextType>({
  theme: 'dark',
  settings: {},
  toggleTheme: () => {},
})

import React, { useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import { ThemeContext } from './themecontext'
import { darkTheme, lightTheme } from '../../style/theme/Theme'

type ThemeContextProvider = {
  children: React.ReactNode
}

const ThemeContextProvider: React.FC<ThemeContextProvider> = ({ children }) => {
  const [themeMode, setTheme] = useState<'lightTheme' | 'darkTheme'>('lightTheme')

  function ToggleTheme() {
    console.log('toggle')
    setTheme(themeMode === 'lightTheme' ? 'darkTheme' : 'lightTheme')
  }

  return (
    <ThemeProvider theme={themeMode === 'lightTheme' ? lightTheme : darkTheme}>
      <ThemeContext.Provider
        value={{
          colorMode: themeMode,
          setColorMode: ToggleTheme
        }}
      >
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

export default ThemeContextProvider

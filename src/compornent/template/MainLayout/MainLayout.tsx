import React, { useState } from 'react'
import { css, ThemeProvider } from '@emotion/react'
import { ThemeContext } from '../../../context/themecontext'
import { darkTheme, lightTheme } from '../../../style/theme/Theme'

type MainLayout = {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayout> = ({ children }) => {
  const [themeMode, setTheme] = useState<'lightTheme' | 'darkTheme'>('lightTheme')

  function ToggleTheme() {
    console.log('toggle')
    setTheme(themeMode === 'lightTheme' ? 'darkTheme' : 'lightTheme')
  }

  return (
    <ThemeProvider theme={themeMode === 'lightTheme' ? darkTheme : lightTheme}>
      <ThemeContext.Provider
        value={{
          colorMode: themeMode,
          setColorMode: ToggleTheme
        }}
      >
        <div
          css={css`
            max-width: 760px;
          `}
        >
          {children}
        </div>
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

export default MainLayout

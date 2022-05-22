import React, { useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import { ThemeContext } from '../../../context/themecontext'

type MainLayout = {
  children: React.ReactNode
}
const lightTheme = {
  background: '#ffffff',
  color: '#000000'
}

const darkTheme = {
  background: '#222639',
  color: '#f0f5fa'
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
        <div>{children}</div>
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

export default MainLayout

import { createContext, useContext } from 'react'

type ThemeContextType ={
  colorMode: 'lightTheme' | 'darkTheme'
  setColorMode: () => void
}

const defaultContext: ThemeContextType = {
  colorMode: 'lightTheme',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setColorMode: () => {}
}

export const ThemeContext = createContext<ThemeContextType>(defaultContext)
export const useTheme = () => useContext(ThemeContext)

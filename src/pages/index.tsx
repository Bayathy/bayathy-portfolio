import type { NextPage } from 'next'
import ThemeContextProvider from '../context/ThemeContextProvider/ThemeContextProvider'

const Home: NextPage = () => {
  return <ThemeContextProvider></ThemeContextProvider>
}

export default Home

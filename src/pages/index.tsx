import type { NextPage } from 'next'
import ThemeContextProvider from '../context/ThemeContextProvider/ThemeContextProvider'
import MainLayout from '../compornent/template/MainLayout/MainLayout'

const Home: NextPage = () => {
  return (
    <ThemeContextProvider>
      <MainLayout />
    </ThemeContextProvider>
  )
}

export default Home

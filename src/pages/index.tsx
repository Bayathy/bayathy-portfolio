import type { NextPage } from 'next'
import ThemeContextProvider from '../context/ThemeContextProvider/ThemeContextProvider'
import MainLayout from '../compornent/template/MainLayout/MainLayout'
import PageContextProvider from '../context/PageContextProvider/PageContextProvider'

const Home: NextPage = () => {
  return (
    <ThemeContextProvider>
      <PageContextProvider>
        <MainLayout />
      </PageContextProvider>
    </ThemeContextProvider>
  )
}

export default Home

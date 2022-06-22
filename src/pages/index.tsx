import type { NextPage } from 'next'
import ThemeContextProvider from '../context/ThemeContextProvider/ThemeContextProvider'
import { MainLayout } from '../component/template'
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

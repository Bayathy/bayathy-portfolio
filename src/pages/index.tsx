import type { NextPage } from 'next'
import ModeToggleButton from '../compornent/molecular/ModeToggleButton/ModeToggleButton'
import ThemeContextProvider from '../context/ThemeContextProvider/ThemeContextProvider'
import MainLayout from '../compornent/template/MainLayout/MainLayout'

const Home: NextPage = () => {
  return (
    <ThemeContextProvider>
      <MainLayout>
        <ModeToggleButton />
      </MainLayout>
    </ThemeContextProvider>
  )
}

export default Home

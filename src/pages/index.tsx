import type { NextPage } from 'next'
import ModeToggleButton from '../compornent/atom/ModeToggleButton/ModeToggleButton'
import MainLayout from '../compornent/template/MainLayout/MainLayout'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div>
        <ModeToggleButton />
      </div>
    </MainLayout>
  )
}

export default Home

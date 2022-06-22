import { NextPage } from 'next'
import { WorksLayout } from '../component/template'
import ThemeContextProvider from '../context/ThemeContextProvider/ThemeContextProvider'
import PageContextProvider from '../context/PageContextProvider/PageContextProvider'

const Work: NextPage = () => {
  return (
    <ThemeContextProvider>
      <PageContextProvider>
        <WorksLayout />
      </PageContextProvider>
    </ThemeContextProvider>
  )
}

export default Work

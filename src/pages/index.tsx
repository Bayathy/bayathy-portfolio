import type { NextPage } from 'next'
import { MainLayout } from '../component/template'
import { usePageState } from '../context/PageContextProvider/pageContext'
import { useEffect } from 'react'

const Home: NextPage = () => {
   const { setPage } = usePageState()

   useEffect(() => {
      setPage(0)
   }, [])
   return <MainLayout />
}

export default Home

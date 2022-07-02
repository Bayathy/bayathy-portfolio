import { NextPage } from 'next'
import { usePageState } from '../context/PageContextProvider/pageContext'
import { useEffect } from 'react'

const Blog: NextPage = () => {
   const { setPage } = usePageState()

   useEffect(() => {
      setPage(2)
   }, [])
   return <></>
}

export default Blog

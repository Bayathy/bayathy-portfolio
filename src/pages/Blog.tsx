import { NextPage } from 'next'
import { usePageState } from '../context/PageContextProvider/pageContext'
import { useEffect } from 'react'
import { BlogLayout } from '../component/template/BlogLayout'

const Blog: NextPage = () => {
   const { setPage } = usePageState()

   useEffect(() => {
      setPage(2)
   }, [])
   return <BlogLayout />
}

export default Blog

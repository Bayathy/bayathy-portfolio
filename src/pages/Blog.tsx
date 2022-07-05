import { GetStaticProps, NextPage } from 'next'
import { usePageState } from '../context/PageContextProvider/pageContext'
import { useEffect } from 'react'
import { BlogLayout } from '../component/template'
import { BlogPost } from '../type/Blogpost'
import { getSortedPostsData } from '../lib/blogpost'

const Blog: NextPage = () => {
   const { setPage } = usePageState()

   useEffect(() => {
      setPage(2)
   }, [])
   return <BlogLayout />
}

export const getStaticProps: GetStaticProps<BlogPost[]> = () => {
   const data = getSortedPostsData()
   return {
      props: {
         data
      }
   }
}

export default Blog

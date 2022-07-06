import { GetStaticProps, NextPage } from 'next'
import { usePageState } from '../context/PageContextProvider/pageContext'
import { useEffect } from 'react'
import { BlogLayout } from '../component/template'
import { getSortedPostsData } from '../lib/blogpost'

export type PostList = {
   data: { id: string; title: string; date: string }[]
}

// eslint-disable-next-line react/prop-types
const Blog: NextPage<PostList> = ({ data }) => {
   const { setPage } = usePageState()

   useEffect(() => {
      setPage(2)
   }, [])
   return <BlogLayout data={data} />
}

export const getStaticProps: GetStaticProps = async () => {
   const data = getSortedPostsData()
   return {
      props: {
         data
      }
   }
}

export default Blog

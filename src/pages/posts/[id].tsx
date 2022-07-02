import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { getAllBlogPostId, getBlogPostData } from '../../lib/blogpost'
import { BlogPost } from '../../type/Blogpost'
import { BlogLayout } from '../../component/template'

export const getStaticProps: GetStaticProps<BlogPost> = async ({ params }) => {
   const id = params!.id

   const data = await getBlogPostData(id as string).then((data) => data)

   return {
      props: {
         data
      }
   }
}

export const getStaticPaths: GetStaticPaths = async () => {
   const paths = await getAllBlogPostId()
   return {
      paths,
      fallback: false
   }
}

// eslint-disable-next-line react/prop-types
const Article: NextPage<BlogPost> = ({ data }) => {
   return <BlogLayout />
}

export default Article

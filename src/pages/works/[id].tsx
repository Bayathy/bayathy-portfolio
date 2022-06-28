import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { WorkLayout } from '../../component/template'
import { getAllWorkPostId, getWorkPostData } from '../../lib/workpost'
import { WorkPost } from '../../type/Workpost'

export const getStaticProps: GetStaticProps<WorkPost> = async ({ params }) => {
   const id = params!.id

   const data = await getWorkPostData(id as string).then((data) => data)

   return {
      props: {
         data
      }
   }
}

export const getStaticPaths: GetStaticPaths = async () => {
   const paths = await getAllWorkPostId()
   return {
      paths,
      fallback: false
   }
}

// eslint-disable-next-line react/prop-types
const Work: NextPage<WorkPost> = ({ data }) => {
   return <WorkLayout data={data} />
}

export default Work

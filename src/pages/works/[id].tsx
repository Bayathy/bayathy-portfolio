import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { WorksLayout } from '../../component/template'
import { Workpostmatter } from '../../type/Workpost'
import { getAllWorkPostId, getWorkPostData } from '../../lib/workpost'

export type WorkProps = {
   data: Workpostmatter
}

export const getStaticProps: GetStaticProps<WorkProps> = async ({ params }) => {
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
const Work: NextPage<WorkProps> = ({ data }) => {
   return <WorksLayout data={data} />
}

export default Work

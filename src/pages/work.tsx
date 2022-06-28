import type { GetStaticProps, NextPage } from 'next'
import { getAllWorkPostId } from '../lib/workpost'
import { WorksListLayout } from '../component/template/WorksListLayout'

export const getStaticProps: GetStaticProps = async () => {
   const data = await getAllWorkPostId().then((data) => data)
   return {
      props: {
         data
      }
   }
}

const Work: NextPage<string[]> = (data: string[]) => {
   return <WorksListLayout />
}

export default Work

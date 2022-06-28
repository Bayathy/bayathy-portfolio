import type { GetStaticProps, NextPage } from 'next'
import { getAllWorksName } from '../lib/workpost'
import { WorksListLayout } from '../component/template/WorksListLayout'

export type WorkProperty = {
   data: string[]
}

const Work: NextPage<WorkProperty> = ({ data }) => {
   return <WorksListLayout data={data} />
}

export const getStaticProps: GetStaticProps<WorkProperty> = async ({
   params
}) => {
   const data = await getAllWorksName().then((data) => data)
   return {
      props: {
         data
      }
   }
}

export default Work

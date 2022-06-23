import { getpostData } from '../../lib/post'
import { GetStaticProps, NextPage } from 'next'
import { WorksLayout } from '../../component/template'
import { Workpostmatter } from '../../type/Workpost'

export type WorkProps = {
   data: Workpostmatter
}

export const getStaticProps: GetStaticProps<WorkProps> = async () => {
   const data = await getpostData('test').then((data) => data)

   return {
      props: {
         data
      }
   }
}

// eslint-disable-next-line react/prop-types
const Work: NextPage<WorkProps> = ({ data }) => {
   return <WorksLayout data={data} />
}

export default Work

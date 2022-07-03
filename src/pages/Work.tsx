import type { GetStaticProps, NextPage } from 'next'
import { getAllWorksProperty } from '../lib/workpost'
import { WorksListLayout } from '../component/template'
import { useEffect } from 'react'
import { usePageState } from '../context/PageContextProvider/pageContext'

export type WorkProperty = {
   data: { title: string; ImageURL: string }[]
}

// eslint-disable-next-line react/prop-types
const Work: NextPage<WorkProperty> = ({ data }) => {
   const { setPage } = usePageState()

   useEffect(() => {
      setPage(1)
   }, [])
   return <WorksListLayout data={data} />
}

export const getStaticProps: GetStaticProps<WorkProperty> = async () => {
   const data = await getAllWorksProperty().then((data) => data)
   return {
      props: {
         data
      }
   }
}

export default Work

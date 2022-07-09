import React from 'react'
import { Header } from '../../organism'
import { WorkDeteal } from '../../organism/WorkDeteal'
import { Space } from '../../atom'
import { BaseLayout } from '../BaseLayout'
import { WorkPost } from '../../../type/Workpost'

export const WorkLayout: React.FC<WorkPost> = ({ data }) => {
   return (
      <BaseLayout title={data.title}>
         <Header />
         <Space space={7.5} margin />
         <WorkDeteal data={data} />
      </BaseLayout>
   )
}

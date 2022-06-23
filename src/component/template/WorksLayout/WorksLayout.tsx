import React from 'react'
import { Header } from '../../organism'
import { WorkDeteal } from '../../organism/WorkDeteal/WorkDeteal'
import { Space } from '../../atom'
import { BaseLayout } from '../BaseLayout'
import { Workpostmatter } from '../../../type/Workpost'

export type WorkProps = {
   data: Workpostmatter
}

export const WorksLayout: React.FC<WorkProps> = ({ data }) => {
   return (
      <BaseLayout>
         <Header />
         <Space space={7.5} margin />
         <WorkDeteal testtext={data} />
         <Space space={4} margin />
      </BaseLayout>
   )
}

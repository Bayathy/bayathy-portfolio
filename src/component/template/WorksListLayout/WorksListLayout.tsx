import { BaseLayout } from '../BaseLayout'
import { TopContents } from '../../organism'
import { Space } from '../../atom'
import React from 'react'
import { WorkProperty } from '../../../pages/work'
import { WorksPanel } from '../../molecular'

export const WorksListLayout: React.FC<WorkProperty> = ({ data }) => {
   return (
      <BaseLayout>
         <TopContents />
         <Space space={4} margin />
         <>
            {data.map((index, key) => {
               return <WorksPanel title={index} key={key} />
            })}
         </>
         <Space space={4} margin />
      </BaseLayout>
   )
}

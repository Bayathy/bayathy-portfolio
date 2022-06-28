import { BaseLayout } from '../BaseLayout'
import { TopContents } from '../../organism'
import { Space } from '../../atom'
import React from 'react'

export const WorksListLayout: React.FC<string[]> = (data) => {
   return (
      <BaseLayout>
         <TopContents />
         <Space space={4} margin />
         <>
            {data.map((index) => {
               return <p>aaa{index}</p>
            })}
         </>
         <Space space={4} margin />
      </BaseLayout>
   )
}

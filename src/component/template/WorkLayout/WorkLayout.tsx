import { BaseLayout } from '../BaseLayout'
import { TopContents, Works } from '../../organism'
import { Space } from '../../atom'
import React from 'react'

export const WorkLayout: React.FC = () => {
   return (
      <BaseLayout>
         <TopContents />
         <Space space={4} margin />
         <Works />
         <Space space={4} margin />
      </BaseLayout>
   )
}

import React from 'react'
import { TopContents } from '../../organism'
import { Space } from '../../atom'
import { BaseLayout } from '../BaseLayout'

export const BlogLayout: React.FC = () => {
   return (
      <BaseLayout>
         <TopContents />
         <Space space={4} margin />

         <Space space={4} margin />
      </BaseLayout>
   )
}

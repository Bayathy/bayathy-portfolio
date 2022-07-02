import React from 'react'
import { About, TopContents } from '../../organism'
import { Space } from '../../atom'
import { BaseLayout } from '../BaseLayout'

export const BlogLayout: React.FC = () => {
   return (
      <BaseLayout>
         <TopContents />
         <Space space={4} margin />
         <About />
         <Space space={4} margin />
      </BaseLayout>
   )
}

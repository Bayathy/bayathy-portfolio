import React from 'react'
import { Space } from '../../atom'
import { About, TopContents } from '../../organism'
import { BaseLayout } from '../BaseLayout'

export const MainLayout: React.FC = () => {
   return (
      <BaseLayout>
         <TopContents />
         <Space space={4} margin />
         <About />
         <Space space={4} margin />
      </BaseLayout>
   )
}

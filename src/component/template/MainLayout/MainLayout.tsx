import React from 'react'
import { About, TopContents } from '../../organism'
import { BaseLayout } from '../BaseLayout'

export const MainLayout: React.FC = () => {
   return (
      <BaseLayout title={'Blog'}>
         <TopContents />
         <About />
      </BaseLayout>
   )
}

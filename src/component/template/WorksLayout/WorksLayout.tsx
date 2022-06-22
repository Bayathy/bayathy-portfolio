import React from 'react'
import { Header } from '../../organism'
import { WorkDeteal } from '../../organism/WorkDeteal/WorkDeteal'
import { Space } from '../../atom'
import { BaseLayout } from '../BaseLayout'

export const WorksLayout: React.FC = () => {
  return (
    <BaseLayout>
      <Header />
      <Space space={7.5} margin />
      <WorkDeteal />
      <Space space={4} margin />
    </BaseLayout>
  )
}

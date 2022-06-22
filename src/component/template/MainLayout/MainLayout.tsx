import React from 'react'
import { usePageState } from '../../../context/PageContextProvider/pageContext'
import { Space } from '../../atom'
import { About, TopContents, Works } from '../../organism'
import { BaseLayout } from '../BaseLayout'

export const MainLayout: React.FC = () => {
  const { page } = usePageState()

  return (
    <BaseLayout>
      <TopContents />
      <Space space={4} margin />
      {page[0] && <About />}
      {page[1] && <Works />}
      <Space space={4} margin />
    </BaseLayout>
  )
}

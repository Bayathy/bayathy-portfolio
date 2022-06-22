import React from 'react'
import { HomeIconBox, MenuTab } from '../../molecular'
import { PageTitle, Space } from '../../atom'

export const TopContents: React.FC = () => {
  return (
    <div>
      <HomeIconBox />
      <Space space={4} margin />
      <MenuTab />
      <Space space={4} margin />
      <PageTitle />
    </div>
  )
}

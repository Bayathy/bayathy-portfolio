import React from 'react'
import { Space } from '../../atom'
import { HistoryBar, SkillsCard } from '../../molecular'

export const About: React.FC = () => {
  return (
    <>
      <Space space={4} margin />
      <HistoryBar />
      <Space space={2} margin />
      <SkillsCard />
    </>
  )
}

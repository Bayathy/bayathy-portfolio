import React from 'react'
import Space from '../../atom/Space/Space'
import HistoryBar from '../../molecular/HistoryBar/HistoryBar'
import SkillsCard from '../../molecular/SkillsCard/SkillsCard'

const About: React.FC = () => {
  return (
    <>
      <Space space={4} margin />
      <HistoryBar />
      <Space space={2} margin />
      <SkillsCard />
    </>
  )
}

export default About

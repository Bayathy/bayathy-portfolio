import React from 'react'
import { css, Global, useTheme } from '@emotion/react'
import Header from '../../organism/Header/Header'
import IconContents from '../../organism/IconContents/IconContents'
import MenuTab from '../../molecular/MenuTab/MenuTab'
import Space from '../../atom/Space/Space'
import PageTitle from '../../atom/PageTitle/PageTitle.'
import SkillsCard from '../../molecular/SkillsCard/SkillsCard'
import HistoryBar from '../../molecular/HistoryBar/HistoryBar'
import Footer from '../../organism/Footer/Footer'

const MainLayout: React.FC = () => {
  const theme = useTheme()

  return (
    <div
      css={css`
        margin: auto;
      `}
    >
      <Global
        styles={css`
          body {
            background: ${theme.colors.primary};
            color: ${theme.colors.text};
            line-height: 1.7;
            box-sizing: border-box;
          }

          * {
            margin: 0;
            padding: 0;
            font-family: Bahnschrift, 'Yu Gothic', '游ゴシック', YuGothic, '游ゴシック体',
              sans-serif;
            user-select: none;
          }
        `}
      />
      <Header />
      <Space space={7.5} margin />
      <IconContents />
      <Space space={4} margin />
      <MenuTab />
      <Space space={4} margin />
      <PageTitle />
      <Space space={4} margin />
      <HistoryBar />
      <Space space={2} margin />
      <SkillsCard />
      <Space space={4} margin />
      <Footer />
    </div>
  )
}

export default MainLayout

import React from 'react'
import { css, Global, useTheme } from '@emotion/react'
import { usePageState } from '../../../context/PageContextProvider/pageContext'
import { Space } from '../../atom'
import { About, Footer, Header, TopContents, Works } from '../../organism'

const MainLayout: React.FC = () => {
  const theme = useTheme()

  const { page } = usePageState()

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
            font-family: 'Anek Malayalam', 'Yu Gothic', '游ゴシック', YuGothic, '游ゴシック体',
              sans-serif;
            user-select: none;
          }

          ::-webkit-scrollbar {
            width: 0px;
          }
        `}
      />
      <Header />
      <Space space={7.5} margin />
      <TopContents />
      <Space space={4} margin />
      {page[0] && <About />}
      {page[1] && <Works />}
      <Space space={4} margin />
      <Footer />
    </div>
  )
}

export default MainLayout

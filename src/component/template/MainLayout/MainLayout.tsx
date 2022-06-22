import React from 'react'
import { css, useTheme } from '@emotion/react'
import { usePageState } from '../../../context/PageContextProvider/pageContext'
import { Space } from '../../atom'
import { About, Footer, Header, TopContents, Works } from '../../organism'
import { GlobalStyle } from '../../../style/global'

const MainLayout: React.FC = () => {
  const theme = useTheme()

  const { page } = usePageState()

  return (
    <div
      css={css`
        margin: auto;
      `}
    >
      <GlobalStyle />
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

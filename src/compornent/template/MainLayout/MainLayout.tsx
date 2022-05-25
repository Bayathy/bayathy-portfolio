import React from 'react'
import { css, Global, useTheme } from '@emotion/react'
import Header from '../../organism/Header/Header'

const MainLayout: React.FC = () => {
  const theme = useTheme()

  return (
    <div
      css={css`
        max-width: 760px;
        margin: auto;
      `}
    >
      <Global
        styles={css`body {
          background: ${theme.colors.primary};
          color: ${theme.colors.text};
        `}
      />
      <Header />
    </div>
  )
}

export default MainLayout

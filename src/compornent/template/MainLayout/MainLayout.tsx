import React from 'react'
import { css, Global, useTheme } from '@emotion/react'
import Header from '../../organism/Header/Header'

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
            margin: 0;
            line-height: 1.7;
            box-sizing: border-box;
        `}
      />
      <Header />
    </div>
  )
}

export default MainLayout

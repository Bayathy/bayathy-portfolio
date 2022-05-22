import React from 'react'
import { css, Global, useTheme } from '@emotion/react'

type MainLayout = {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayout> = ({ children }) => {
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
      {children}
    </div>
  )
}

export default MainLayout

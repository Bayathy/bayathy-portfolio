import React from 'react'
import { css } from '@emotion/react'

type MainLayout = {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayout> = ({ children }) => {
  return (
    <div
      css={css`
        max-width: 760px;
        margin: auto;
      `}
    >
      {children}
    </div>
  )
}

export default MainLayout

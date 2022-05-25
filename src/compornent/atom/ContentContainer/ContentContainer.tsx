import React from 'react'
import { css } from '@emotion/react'

type Content = {
  children: React.ReactNode
}

const ContentContainer: React.FC<Content> = ({ children }) => {
  return (
    <div
      css={css`
        max-width: 760px;
        width: 100%;
      `}
    >
      {children}
    </div>
  )
}

export default ContentContainer

import React from 'react'
import { css, SerializedStyles } from '@emotion/react'

type Content = {
  children: React.ReactNode
  style: SerializedStyles
}

const ContentContainer: React.FC<Content> = ({ children, style }) => {
  return (
    <div
      css={css`
        max-width: 760px;
        width: 100%;
        margin: auto;
        ${style}
      `}
    >
      {children}
    </div>
  )
}

export default ContentContainer

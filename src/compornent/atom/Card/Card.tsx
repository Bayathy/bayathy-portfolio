import React from 'react'
import { css, SerializedStyles, useTheme } from '@emotion/react'

type Card = {
  children: React.ReactNode
  style?: SerializedStyles
  className?: string
}

export const Card: React.FC<Card> = ({ children, style, className }) => {
  const theme = useTheme()

  return (
    <div
      className={className}
      css={css`
        background: ${theme.colors.extra};
        border-radius: 10px;
        ${style}
      `}
    >
      {children}
    </div>
  )
}

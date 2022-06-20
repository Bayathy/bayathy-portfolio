import React from 'react'
import { css, SerializedStyles, useTheme } from '@emotion/react'

type Card = {
  children: React.ReactNode
  style?: SerializedStyles
}

const Card: React.FC<Card> = ({ children, style }) => {
  const theme = useTheme()

  return (
    <div
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

export default Card

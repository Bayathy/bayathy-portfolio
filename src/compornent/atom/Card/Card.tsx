import React from 'react'
import { css, useTheme } from '@emotion/react'

type Card = {
  children: React.ReactNode
}

const Card: React.FC<Card> = ({ children }) => {
  const theme = useTheme()

  return (
    <div
      css={css`
        background: ${theme.colors.secondary};
      `}
    >
      {children}
    </div>
  )
}

export default Card

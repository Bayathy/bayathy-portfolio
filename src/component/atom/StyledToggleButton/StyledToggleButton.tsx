import React from 'react'
import { css, useTheme } from '@emotion/react'

type StyledToggleButton = {
  children: React.ReactNode
}

export const StyledToggleButton: React.FC<StyledToggleButton> = ({ children }) => {
  const theme = useTheme()

  return (
    <div
      css={css`
        width: 2rem;
        height: 2rem;
        border: 3px solid ${theme.colors.text};
        display: flex;
        align-content: center;
        justify-content: center;
        border-radius: 14px;
      `}
    >
      {children}
    </div>
  )
}
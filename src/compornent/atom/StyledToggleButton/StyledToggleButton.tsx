import React from 'react'
import { css, useTheme } from '@emotion/react'

type StyledToggleButton = {
  children: React.ReactNode
}

const StyledToggleButton: React.FC<StyledToggleButton> = ({ children }) => {
  const theme = useTheme()

  return (
    <div
      css={css`
        width: 3rem;
        height: 3rem;
        border: 3px solid ${theme.colors.primary};
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

export default StyledToggleButton

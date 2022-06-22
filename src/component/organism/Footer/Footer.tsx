import React from 'react'
import { css, useTheme } from '@emotion/react'

export const Footer: React.FC = () => {
  const theme = useTheme()
  return (
    <div
      css={css`
        width: 100%;
        height: 3rem;
        background: ${theme.colors.primary};
        border-top: 1px solid ${theme.colors.extra};
        text-align: center;
        position: relative;
        bottom: 0;
      `}
    >
      <p>@Bayathy</p>
    </div>
  )
}

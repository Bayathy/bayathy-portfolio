import React from 'react'
import { css, useTheme } from '@emotion/react'

type StyledButton = {
   children: React.ReactNode
}

export const StyledButton: React.FC<StyledButton> = ({ children }) => {
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

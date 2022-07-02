import React from 'react'
import { css, useTheme } from '@emotion/react'

type TitleTypography = {
   title?: string
}

export const TitleTypography: React.FC<TitleTypography> = ({ title }) => {
   const theme = useTheme()

   return (
      <div
         css={css`
            width: 90%;
            margin: auto;
         `}
      >
         <p
            css={css`
               padding-left: ${theme.padding.small};
               border-bottom: 1px solid ${theme.colors.text};
               font-size: 1.5rem;
               font-weight: bold;
            `}
         >
            {title}
         </p>
      </div>
   )
}

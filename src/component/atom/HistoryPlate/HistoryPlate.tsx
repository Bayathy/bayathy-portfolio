import { css, useTheme } from '@emotion/react'
import React from 'react'

type HistoryPlate = {
   text: string
   date: string
}

export const HistoryPlate: React.FC<HistoryPlate> = ({ text, date }) => {
   const theme = useTheme()

   return (
      <div
         css={css`
            display: flex;
            align-items: center;
            position: relative;
         `}
      >
         <div
            css={css`
               position: absolute;
               width: 0.5rem;
               height: 0.5rem;
               border-radius: 50%;
               left: 1.15rem;
               top: 0;
               @media (min-width: 420px) {
                  left: 2.1rem;
               }
               background: ${theme.colors.text};
            `}
         />
         <div
            css={css`
               padding-left: 2.5rem;
               @media (min-width: 420px) {
                  padding-left: 4rem;
               }
               width: 100%;
            `}
         >
            <div
               css={css`
                  width: 80%;
                  @media (min-width: 420px) {
                     width: 90%;
                  }
                  border-radius: 10px;
                  background: ${theme.colors.extra};
                  line-height: 1;
                  display: flex;
                  flex-direction: column;
                  padding: ${theme.padding.small};
               `}
            >
               <p>{date}</p>
               <p
                  css={css`
                     word-break: break-all;
                     width: 100%;
                  `}
               >
                  {text}
               </p>
            </div>
         </div>
      </div>
   )
}

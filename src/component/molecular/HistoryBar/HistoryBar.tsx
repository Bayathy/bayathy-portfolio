import { css, useTheme } from '@emotion/react'
import React from 'react'
import { ContentContainer, HistoryPlate } from '../../atom'

export type History = {
   date: string
   text: string
}

export const HistoryBar: React.FC<{ datalist: History[] }> = ({ datalist }) => {
   const theme = useTheme()

   return (
      <ContentContainer
         style={css`
            width: 90%;
         `}
      >
         <div
            css={css`
               .plate:not(:last-child)::before {
                  content: '';
                  position: absolute;
                  left: 1.3rem;
                  @media (min-width: 420px) {
                     left: 2.3rem;
                  }
                  top: 20px;
                  bottom: 0;
                  width: 2px;
                  height: 88%;
                  background: ${theme.colors.text};
               }
            `}
         >
            {datalist.map((index, key) => (
               <div
                  className={'plate'}
                  css={css`
                     position: relative;
                  `}
                  key={key}
               >
                  <HistoryPlate text={index.text} date={index.date} key={key} />
                  <div
                     css={css`
                        padding-bottom: ${theme.padding.medium};
                        width: 1%;
                     `}
                  />
               </div>
            ))}
         </div>
      </ContentContainer>
   )
}

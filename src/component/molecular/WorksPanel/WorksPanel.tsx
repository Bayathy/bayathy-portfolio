import React from 'react'
import { Card } from '../../atom'
import { css, useTheme } from '@emotion/react'

type WorksPanel = {
   title: string
   ImageSrc: string
}

export const WorksPanel: React.FC<WorksPanel> = ({ title, ImageSrc }) => {
   const theme = useTheme()

   return (
      <Card
         className={'Card'}
         style={css`
            width: 80%;
         `}
      >
         <div
            css={css`
               background: ${theme.colors.extra};
               border-radius: inherit;
               padding: ${theme.padding.small};
            `}
         >
            <div>
               <p
                  css={css`
                     text-align: left;
                     font-size: 1.4rem;
                  `}
               >
                  {title}
               </p>
            </div>
            <div
               css={css`
                  width: 95%;
                  margin: auto;
               `}
            >
               <p
                  css={css`
                     width: inherit;
                     text-overflow: ellipsis;
                     white-space: nowrap;
                     overflow: hidden;
                  `}
               >
                  content content content content content content content
                  content content content content
               </p>
            </div>
         </div>
      </Card>
   )
}

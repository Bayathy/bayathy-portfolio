import React from 'react'
import { Card } from '../../atom'
import { css, useTheme } from '@emotion/react'
import Link from 'next/link'

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
               <Link href={`works/${title}`}>
                  <a
                     css={css`
                        text-align: left;
                        font-size: 1.4rem;

                        :hover {
                           text-decoration: underline;
                        }
                     `}
                  >
                     {title}
                  </a>
               </Link>
            </div>
            <div>
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

import React from 'react'
import { Card, Space } from '../../atom'
import { css, useTheme } from '@emotion/react'
import { Icon } from '@iconify/react'
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
            <Space space={0.5} margin />
            <div
               css={css`
                  display: flex;
                  width: 100%;
                  height: 100%;
                  justify-content: end;
               `}
            >
               <Link href={`works/${title}`}>
                  <div
                     css={css`
                        padding: 0.5rem;
                        background: ${theme.colors.primary};
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 999px;
                        width: fit-content;
                     `}
                  >
                     <Icon width={'1.5rem'} icon={'tabler:info-square'} />
                  </div>
               </Link>
            </div>
         </div>
      </Card>
   )
}

import React from 'react'
import { Card, Space } from '../../atom'
import { css, useTheme } from '@emotion/react'
import Link from 'next/link'

type WorksPanel = {
   title: string
   content: string
}

export const WorksPanel: React.FC<WorksPanel> = ({ title, content }) => {
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
                  {content}
               </p>
            </div>
            <Space space={1} margin />
            <div
               css={css`
                  display: flex;
                  justify-content: end;
                  padding-right: 0.5rem;
               `}
            >
               <Link href={`works/${title}`} passHref>
                  <a
                     css={css`
                        border: 2px solid ${theme.colors.text};
                        padding: 0.2rem 0.5rem;
                        border-radius: 10px;

                        :hover {
                           border: 2px solid ${theme.colors.secondary};
                           color: ${theme.colors.secondary};
                        }
                     `}
                  >
                     more
                  </a>
               </Link>
            </div>
         </div>
      </Card>
   )
}

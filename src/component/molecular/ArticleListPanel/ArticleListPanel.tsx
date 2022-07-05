import React from 'react'
import { Card } from '../../atom'
import { css, useTheme } from '@emotion/react'
import Link from 'next/link'

export const ArticleListPanel: React.FC<{ title: string; date: string }> = ({
   title,
   date
}) => {
   const theme = useTheme()
   return (
      <Card
         style={css`
            width: 90%;
            margin: auto;
         `}
      >
         <div
            css={css`
               padding: ${theme.padding.small};
            `}
         >
            <Link href={`posts/${title}`} passHref>
               <a
                  css={css`
                     color: ${theme.colors.text};
                     text-decoration: none;
                     font-size: 1.2rem;
                     text-overflow: ellipsis;
                     white-space: nowrap;
                     overflow: hidden;

                     :hover {
                        text-decoration: underline;
                     }
                  `}
               >
                  {title}
               </a>
            </Link>
            <div>
               <p>{date}</p>
            </div>
         </div>
      </Card>
   )
}

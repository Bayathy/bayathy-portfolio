import React from 'react'
import { Card } from '../../atom'
import { css, useTheme } from '@emotion/react'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import Image from 'next/image'

type WorksPanel = {
   title: string
}

export const WorksPanel: React.FC<WorksPanel> = ({ title }) => {
   const theme = useTheme()

   return (
      <Card
         className={'Card'}
         style={css`
            width: 16rem;
         `}
      >
         <div
            css={css`
               padding: ${theme.padding.small};
            `}
         >
            <div
               css={css`
                  width: 100%;
                  aspect-ratio: 16/9;
                  margin: auto;
                  position: relative;
                  border-radius: 10px;
               `}
            >
               <Image
                  src={'/icon3.jpg'}
                  objectFit={'cover'}
                  layout={'fill'}
                  style={{ borderRadius: 10, zIndex: 1 }}
               />
            </div>
            <div>
               <p
                  css={css`
                     text-align: center;
                     font-size: 1.5rem;
                  `}
               >
                  {title}
               </p>
            </div>
            <div
               css={css`
                  display: flex;
                  align-content: end;
                  justify-content: end;
               `}
            >
               <Link href={`works/${title}`}>
                  <div
                     css={css`
                        padding: 0.4rem;
                        border-radius: 999px;
                        background: ${theme.colors.primary};
                        display: flex;
                        justify-content: center;
                        align-content: center;
                     `}
                  >
                     <Icon icon="charm:link-external" />
                  </div>
               </Link>
            </div>
         </div>
      </Card>
   )
}

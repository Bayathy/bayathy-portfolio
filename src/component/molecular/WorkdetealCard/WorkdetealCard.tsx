import React from 'react'
import { css, useTheme } from '@emotion/react'
import { Card, Space } from '../../atom'
import { WorkPost } from '../../../type/Workpost'

export const WorkdetealCard: React.FC<WorkPost> = ({ data }) => {
   const theme = useTheme()

   return (
      <Card
         style={css`
            width: 80%;
            margin: auto;
            padding: ${theme.padding.small};
         `}
      >
         <div
            css={css`
               padding: 0.5rem;
            `}
         >
            <p>{data.content}</p>
         </div>
         <Space space={1} margin />
         <div
            css={css`
               display: flex;
               flex-direction: column;
            `}
         >
            <div
               css={css`
                  width: max-content;
                  background: ${theme.colors.primary};
                  text-align: center;
                  border-radius: 20px;
                  font-size: 0.8rem;
               `}
            >
               <p
                  css={css`
                     padding: 0.5rem;
                     line-height: 1;
                  `}
               >
                  技術スタック
               </p>
            </div>
            <p
               css={css`
                  padding: 0.8rem;
                  line-height: 1;
               `}
            >
               {data.tech}
            </p>
         </div>
      </Card>
   )
}

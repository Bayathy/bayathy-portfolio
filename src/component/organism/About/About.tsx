import React from 'react'
import { Space } from '../../atom'
import { HistoryBar, SkillsCard } from '../../molecular'
import { css } from '@emotion/react'
import { popUp } from '../../../style/animation'

export const About: React.FC = () => {
   return (
      <>
         <div
            css={css`
               animation: ${popUp} 0.5s ease;
            `}
         >
            <Space space={2} margin />
            <HistoryBar />
            <Space space={2} margin />
            <SkillsCard />
         </div>
      </>
   )
}

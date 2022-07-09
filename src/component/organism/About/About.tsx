import React from 'react'
import { Space } from '../../atom'
import { History, HistoryBar, SkillsCard } from '../../molecular'
import { css } from '@emotion/react'
import { popUp } from '../../../style/animation'

export const About: React.FC = () => {
   const datalist: History[] = [
      { date: '2020/4', text: '鈴鹿高専入学' },
      { date: '2021/12', text: 'HackUKosen Yahoo賞 HappyHacking賞 受賞' },
      { date: '2022/1', text: '技育ハッカソン出場' },
      { date: '2022/3', text: '鳥羽鈴鹿合同ハッカソン 百五銀行賞受賞' }
   ]

   return (
      <>
         <div
            css={css`
               animation: ${popUp} 0.5s ease;
            `}
         >
            <Space space={2} margin />
            <HistoryBar datalist={datalist} />
            <Space space={2} margin />
            <SkillsCard />
         </div>
      </>
   )
}

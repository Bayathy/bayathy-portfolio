import React from 'react'
import { Space } from '../../atom'
import { History, HistoryBar, SkillsCard } from '../../molecular'
import { css, useTheme } from '@emotion/react'
import { popUp } from '../../../style/animation'
import { Icon } from '@iconify/react'

export const About: React.FC = () => {
   const datalist: History[] = [
      { date: '2020/4', text: '鈴鹿高専入学' },
      { date: '2021/12', text: 'HackUKosen Yahoo賞 HappyHacking賞 受賞' },
      { date: '2022/1', text: '技育ハッカソン出場' },
      { date: '2022/3', text: '鳥羽鈴鹿合同ハッカソン 百五銀行賞受賞' }
   ]

   const theme = useTheme()

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
            <SkillsCard>
               <p>
                  鈴鹿高専の三年生です。フロントエンド、Webデザイン、企画に興味があります。
                  <br />
                  旅行やゲームが趣味です。
               </p>
               <div
                  css={css`
                     display: flex;
                     justify-content: center;
                     column-gap: 0.5rem;
                  `}
               >
                  <a
                     css={css`
                        color: ${theme.colors.text};
                        border: 2.5px solid ${theme.colors.text};
                        display: flex;
                        padding: 0.3rem;
                        justify-content: center;
                        align-content: center;
                        width: max-content;
                        border-radius: 50%;

                        :hover {
                           border: 2.5px solid ${theme.colors.secondary};
                           color: ${theme.colors.secondary};
                        }
                     `}
                     href="https://twitter.com/Kobath_dev"
                  >
                     <Icon
                        height="1.5rem"
                        width="1.5rem"
                        icon="tabler:brand-twitter"
                     />
                  </a>
                  <a
                     css={css`
                        color: ${theme.colors.text};
                        border: 2.5px solid ${theme.colors.text};
                        display: flex;
                        padding: 0.3rem;
                        justify-content: center;
                        align-content: center;
                        width: max-content;
                        border-radius: 50%;

                        :hover {
                           border: 2.5px solid ${theme.colors.secondary};
                           color: ${theme.colors.secondary};
                        }
                     `}
                     href="https://github.com/Bayathy"
                  >
                     <Icon
                        height="1.5rem"
                        width="1.5rem"
                        icon="tabler:brand-github"
                     />
                  </a>
               </div>
            </SkillsCard>
         </div>
      </>
   )
}

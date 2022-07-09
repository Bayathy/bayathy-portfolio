import { BaseLayout } from '../BaseLayout'
import { TopContents } from '../../organism'
import { ContentContainer, Space } from '../../atom'
import React from 'react'
import { WorksPanel } from '../../molecular'
import { WorkProperty } from '../../../pages/Work'
import { css, useTheme } from '@emotion/react'
import { popUp } from '../../../style/animation'

export const WorksListLayout: React.FC<WorkProperty> = ({ data }) => {
   const theme = useTheme()
   return (
      <BaseLayout title={'Work'}>
         <TopContents />
         <Space space={2} margin />
         <ContentContainer
            style={css`
               animation: ${popUp} 0.5s ease;
            `}
         >
            <div
               css={css`
                  display: flex;
                  justify-content: center;
                  flex-wrap: wrap;
                  gap: ${theme.margin.medium};
               `}
            >
               {data.map((index, key) => {
                  return (
                     <WorksPanel
                        title={index.title}
                        content={index.content}
                        key={key}
                     />
                  )
               })}
            </div>
         </ContentContainer>
         <Space space={4} margin />
      </BaseLayout>
   )
}

import { BaseLayout } from '../BaseLayout'
import { TopContents } from '../../organism'
import { ContentContainer, Space } from '../../atom'
import React from 'react'
import { WorksPanel } from '../../molecular'
import { WorkProperty } from '../../../pages/Work'
import { css, useTheme } from '@emotion/react'
import { popup } from '../../../style/animation'

export const WorksListLayout: React.FC<WorkProperty> = ({ data }) => {
   const theme = useTheme()
   return (
      <BaseLayout>
         <TopContents />
         <Space space={2} margin />
         <ContentContainer
            style={css`
               animation: ${popup} 0.5s ease;
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
                        ImageSrc={index.ImageURL}
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

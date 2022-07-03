import { BaseLayout } from '../BaseLayout'
import { TopContents } from '../../organism'
import { ContentContainer, Space } from '../../atom'
import React from 'react'
import { WorksPanel } from '../../molecular'
import { WorkProperty } from '../../../pages/Work'
import { css, useTheme } from '@emotion/react'

export const WorksListLayout: React.FC<WorkProperty> = ({ data }) => {
   const theme = useTheme()
   return (
      <BaseLayout>
         <TopContents />
         <Space space={4} margin />
         <ContentContainer>
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

import { BaseLayout } from '../BaseLayout'
import { TopContents } from '../../organism'
import { ContentContainer, Space } from '../../atom'
import React from 'react'
import { WorksPanel } from '../../molecular'
import { WorkProperty } from '../../../pages/Work'
import { css } from '@emotion/react'

export const WorksListLayout: React.FC<WorkProperty> = ({ data }) => {
   return (
      <BaseLayout>
         <TopContents />
         <Space space={4} margin />
         <ContentContainer>
            <div
               css={css`
                  // display: flex;
                  // justify-content: space-between;
                  // flex-wrap: wrap;
               `}
            >
               {data.map((index, key) => {
                  return <WorksPanel title={index} key={key} />
               })}
            </div>
         </ContentContainer>
         <Space space={4} margin />
      </BaseLayout>
   )
}

import React from 'react'
import { TopContents } from '../../organism'
import { ContentContainer, Space } from '../../atom'
import { BaseLayout } from '../BaseLayout'
import { ArticleListPanel } from '../../molecular'

export const BlogLayout: React.FC = () => {
   return (
      <BaseLayout>
         <TopContents />
         <Space space={2} margin />
         <ContentContainer>
            <ArticleListPanel />
         </ContentContainer>
         <Space space={4} margin />
      </BaseLayout>
   )
}

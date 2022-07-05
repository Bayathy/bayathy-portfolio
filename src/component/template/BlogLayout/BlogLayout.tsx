import React from 'react'
import { TopContents } from '../../organism'
import { ContentContainer, Space } from '../../atom'
import { BaseLayout } from '../BaseLayout'
import { ArticleListPanel } from '../../molecular'

export const BlogLayout: React.FC<
   {
      data: { title: string; date: string }
   }[]
> = (data) => {
   return (
      <BaseLayout>
         <TopContents />
         <Space space={2} margin />
         <ContentContainer>
            {data.map((index, key) => {
               return (
                  <ArticleListPanel
                     title={index.data.title}
                     date={index.data.date}
                     key={key}
                  />
               )
            })}
         </ContentContainer>
         <Space space={4} margin />
      </BaseLayout>
   )
}

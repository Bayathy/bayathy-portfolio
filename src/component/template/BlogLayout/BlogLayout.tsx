import React from 'react'
import { TopContents } from '../../organism'
import { ContentContainer, Space } from '../../atom'
import { BaseLayout } from '../BaseLayout'
import { ArticleListPanel } from '../../molecular'
import { PostList } from '../../../pages/Blog'

export const BlogLayout: React.FC<PostList> = ({ data }) => {
   return (
      <BaseLayout>
         <TopContents />
         <Space space={2} margin />
         <ContentContainer>
            <>
               {data?.map((index, key) => {
                  return (
                     <ArticleListPanel
                        title={index.title}
                        date={index.date}
                        key={key}
                     />
                  )
               })}
            </>
         </ContentContainer>
         <Space space={4} margin />
      </BaseLayout>
   )
}

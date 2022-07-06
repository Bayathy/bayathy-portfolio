import React from 'react'
import { TopContents } from '../../organism'
import { ContentContainer, Space } from '../../atom'
import { BaseLayout } from '../BaseLayout'
import { ArticleListPanel } from '../../molecular'
import { PostList } from '../../../pages/Blog'
import { css } from '@emotion/react'
import { popUp } from '../../../style/animation'

export const BlogLayout: React.FC<PostList> = ({ data }) => {
   return (
      <BaseLayout>
         <TopContents />
         <Space space={2} margin />
         <ContentContainer
            style={css`
               animation: ${popUp} 0.5s ease;
            `}
         >
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

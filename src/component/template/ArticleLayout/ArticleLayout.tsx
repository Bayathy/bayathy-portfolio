import React from 'react'
import { BaseLayout } from '../BaseLayout'
import { BlogPost } from '../../../type/Blogpost'
import { ContentContainer, Space } from '../../atom'
import { css, useTheme } from '@emotion/react'

export const ArticleLayout: React.FC<BlogPost> = ({ data }) => {
   const theme = useTheme()

   return (
      <BaseLayout>
         <ContentContainer>
            <p
               css={css`
                  width: 90%;
                  line-height: 1.2;
                  font-weight: bold;
                  margin: auto;
                  font-size: 2rem;
                  border-bottom: 2px solid ${theme.colors.text};
                  @media (max-width: 480px) {
                     font-size: 1.5rem;
                  }
               `}
            >
               {data.title}
            </p>
            <Space space={1} margin />
            <div
               css={css`
                  width: 90%;
                  margin: auto;

                  h1 {
                     font-size: 1.5rem;
                  }
               `}
               dangerouslySetInnerHTML={{ __html: data.content }}
            />
         </ContentContainer>
      </BaseLayout>
   )
}

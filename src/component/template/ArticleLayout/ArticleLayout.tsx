import React, { useEffect } from 'react'
import { BaseLayout } from '../BaseLayout'
import { BlogPost } from '../../../type/Blogpost'
import { ContentContainer, Space } from '../../atom'
import { css, useTheme } from '@emotion/react'

export const ArticleLayout: React.FC<BlogPost> = ({ data }) => {
   const theme = useTheme()

   useEffect(() => console.log(data.content))

   return (
      <BaseLayout
         title={data.title}
         description={data.content}
         image={`https://res.cloudinary.com/dff7r0iah/image/upload/l_text:Sawarabi%20Gothic_50_bold:${data.title},co_rgb:333,w_500,c_fit/v1657348914/OGB-blog_nvuwol.png`}
      >
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
                  padding: 0rem 3rem;
                  @media (max-width: 480px) {
                     padding: 0rem 2rem;
                  }
                  margin: auto;

                  ul {
                     padding-left: 1rem;
                  }

                  h1 {
                     line-height: 1.2;
                     font-size: 1.8rem;
                     @media (max-width: 480px) {
                        font-size: 1.3rem;
                     }
                     border-bottom: dotted;
                  }

                  h2 {
                     line-height: 2;
                     font-size: 1.5rem;
                     @media (max-width: 480px) {
                        font-size: 1.1rem;
                     }
                  }

                  img {
                     margin: auto;
                     display: flex;
                     align-content: center;
                     width: 80%;
                  }
               `}
               dangerouslySetInnerHTML={{ __html: data.content }}
            />
         </ContentContainer>
      </BaseLayout>
   )
}

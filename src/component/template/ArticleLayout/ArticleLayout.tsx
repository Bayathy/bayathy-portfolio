import React, { useEffect } from 'react'
import { BaseLayout } from '../BaseLayout'
import { BlogPost } from '../../../type/Blogpost'
import { ContentContainer, Space } from '../../atom'
import { css, useTheme } from '@emotion/react'
import Head from 'next/head'

export const ArticleLayout: React.FC<BlogPost> = ({ data }) => {
   const theme = useTheme()

   useEffect(() => console.log(data.content))

   return (
      <>
         <Head>
            <meta
               property="og:image"
               content="https://res.cloudinary.com/dff7r0iah/image/upload/l_text:Sawarabi%20Gothic_50_bold:%E3%81%93%E3%82%8C%E3%81%AFOGP%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E3%81%A7%E3%81%99%EF%BC%81,co_rgb:333,w_500,c_fit/v1657336544/ogp_le5itk.png"
            />
            <title>{data.title}</title>
         </Head>
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
                        font-size: 1.8rem;
                        @media (max-width: 480px) {
                           font-size: 1.3rem;
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
      </>
   )
}

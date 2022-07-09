import React from 'react'
import { Space } from '../../atom'
import { Footer, Header, SEO, SEOProperty } from '../../organism'
import { css } from '@emotion/react'
import { GlobalStyle } from '../../../style/global'

type BaseLayout = {
   children: React.ReactNode
} & SEOProperty

export const BaseLayout: React.FC<BaseLayout> = ({ children, ...rest }) => {
   return (
      <div
         css={css`
            margin: auto;
         `}
      >
         <SEO {...rest} />
         <GlobalStyle />
         <div
            css={css`
               min-height: calc(100vh - 7.5rem);
            `}
         >
            <Header />
            <Space space={7.5} margin />
            {children}
         </div>
         <Space space={4} margin />
         <Footer />
      </div>
   )
}

import React from 'react'
import { Space } from '../../atom'
import { Footer, Header } from '../../organism'
import { css } from '@emotion/react'
import { GlobalStyle } from '../../../style/global'

type BaseLayout = {
   children: React.ReactNode
}

export const BaseLayout: React.FC<BaseLayout> = ({ children }) => {
   return (
      <div
         css={css`
            margin: auto;
         `}
      >
         <GlobalStyle />
         <div
            css={css`
               min-height: calc(100vh - 7.5rem);
            `}
         >
            <Header />
            <Space space={7.5} margin />
            {children}
            <Space space={4} margin />
         </div>
         <Footer />
      </div>
   )
}

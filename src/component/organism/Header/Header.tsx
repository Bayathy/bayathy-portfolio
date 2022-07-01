import React, { useEffect } from 'react'
import { css, useTheme } from '@emotion/react'
import { ModeToggleButton } from '../../molecular'
import { ContentContainer } from '../../atom'
import { useRouter } from 'next/router'

export const Header: React.FC = () => {
   const theme = useTheme()
   const router = useRouter()

   useEffect(() => {
      console.log(router.pathname)
   })

   return (
      <div
         css={css`
            position: fixed;
            top: 0;
            width: 100vw;
            background: ${theme.colors.secondary};
            height: 3.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 999;
         `}
      >
         <ContentContainer>
            <div
               css={css`
                  display: flex;
                  justify-content: space-between;
                  padding-left: 2rem;
               `}
            >
               <div
                  css={css`
                     font-size: 1.3rem;
                  `}
               >
                  <p>Bayathy</p>
               </div>
               <div
                  css={css`
                     padding-right: 2rem;
                  `}
               >
                  <ModeToggleButton />
               </div>
            </div>
         </ContentContainer>
      </div>
   )
}

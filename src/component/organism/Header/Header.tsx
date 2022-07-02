import React from 'react'
import { css, useTheme } from '@emotion/react'
import { DropdownMenu, ModeToggleButton } from '../../molecular'
import { ContentContainer } from '../../atom'

export const Header: React.FC = () => {
   const theme = useTheme()

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
               <DropdownMenu />
               <div
                  css={css`
                     padding-right: 1.5rem;
                  `}
               >
                  <ModeToggleButton />
               </div>
            </div>
         </ContentContainer>
      </div>
   )
}

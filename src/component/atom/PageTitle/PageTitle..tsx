import { css, useTheme } from '@emotion/react'
import React from 'react'
import { usePageState } from '../../../context/PageContextProvider/pageContext'
import { ContentContainer } from '../ContentContainer'

export const PageTitle: React.FC = () => {
   const { page } = usePageState()
   const theme = useTheme()
   const title = page[0] ? 'About Me' : page[1] ? 'Work' : 'Blog'

   return (
      <ContentContainer>
         <div
            css={css`
               width: 95%;
               border-bottom: 2px solid ${theme.colors.text};
               margin: auto;
            `}
         >
            <p
               css={css`
                  font-size: 1.5rem;
                  font-weight: bold;
               `}
            >
               {title}
            </p>
         </div>
      </ContentContainer>
   )
}

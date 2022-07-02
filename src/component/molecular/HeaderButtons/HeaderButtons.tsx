import React from 'react'
import { StyledButton } from '../../atom'
import { Icon } from '@iconify/react'
import { css, useTheme } from '@emotion/react'
import { ModeToggleButton } from '../ModeToggleButton'
import { useRouter } from 'next/router'

export const HeaderButtons: React.FC = () => {
   const theme = useTheme()
   const router = useRouter()
   return (
      <div
         css={css`
            display: flex;
            column-gap: 0.5rem;
         `}
      >
         <StyledButton>
            <Icon
               height={'80%'}
               style={{
                  paddingTop: '10%',
                  color: `${theme.colors.text}`
               }}
               icon={'tabler:user'}
               onClick={() => router.push('/')}
            />
         </StyledButton>
         <StyledButton>
            <Icon
               height={'80%'}
               style={{
                  paddingTop: '10%',
                  color: `${theme.colors.text}`
               }}
               icon={'tabler:tool'}
               onClick={() => router.push('/Work')}
            />
         </StyledButton>
         <StyledButton>
            <Icon
               height={'80%'}
               style={{
                  paddingTop: '10%',
                  color: `${theme.colors.text}`
               }}
               icon={'tabler:notes'}
               onClick={() => router.push('/Blog')}
            />
         </StyledButton>
         <ModeToggleButton />
      </div>
   )
}

import React from 'react'
import { StyledButton } from '../../atom'
import { Icon } from '@iconify/react/dist/offline'
import { css, useTheme } from '@emotion/react'
import { ModeToggleButton } from '../ModeToggleButton'
import { useRouter } from 'next/router'
import userIcon from '@iconify/icons-tabler/user'
import toolIcon from '@iconify/icons-tabler/tool'
import notesIcon from '@iconify/icons-tabler/notes'

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
               icon={userIcon}
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
               icon={toolIcon}
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
               icon={notesIcon}
               onClick={() => router.push('/Blog')}
            />
         </StyledButton>
         <ModeToggleButton />
      </div>
   )
}

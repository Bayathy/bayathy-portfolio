import React from 'react'
import { StyledButton } from '../../atom'
import { Icon } from '@iconify/react'
import { useTheme } from '@emotion/react'
import { ModeToggleButton } from '../ModeToggleButton'

export const HeaderButtons: React.FC = () => {
   const theme = useTheme()
   return (
      <div>
         <StyledButton>
            <Icon
               height={'80%'}
               style={{
                  paddingTop: '10%',
                  color: `${theme.colors.text}`
               }}
               icon={'tabler:user'}
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
            />
         </StyledButton>
         <ModeToggleButton />
      </div>
   )
}
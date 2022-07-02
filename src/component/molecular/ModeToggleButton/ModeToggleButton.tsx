import React from 'react'
import { Icon } from '@iconify/react'
import { useTheme as useThemeMode } from '../../../context/ThemeContextProvider/themecontext'
import { useTheme } from '@emotion/react'
import { StyledButton } from '../../atom'

export const ModeToggleButton: React.FC = () => {
   const { colorMode, setColorMode } = useThemeMode()

   const theme = useTheme()
   return (
      <StyledButton>
         <Icon
            height={'80%'}
            style={{
               paddingTop: '10%',
               color: `${theme.colors.text}`
            }}
            icon={colorMode === 'darkTheme' ? 'tabler:sun' : 'tabler:moon'}
            onClick={setColorMode}
         />
      </StyledButton>
   )
}

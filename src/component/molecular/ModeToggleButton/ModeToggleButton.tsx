import React from 'react'
import { Icon } from '@iconify/react'
import { useTheme as useThemeMode } from '../../../context/ThemeContextProvider/themecontext'
import { useTheme } from '@emotion/react'
import { StyledButton } from '../../atom'
import sunIcon from '@iconify/icons-tabler/sun'
import moonIcon from '@iconify/icons-tabler/moon'

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
            icon={colorMode === 'darkTheme' ? sunIcon : moonIcon}
            onClick={setColorMode}
         />
      </StyledButton>
   )
}

import React from 'react'
import { Icon } from '@iconify/react'
import { useTheme as useThemeMode } from '../../../context/ThemeContextProvider/themecontext'
import { useTheme } from '@emotion/react'
import { StyledToggleButton } from '../../atom'

export const ModeToggleButton: React.FC = () => {
  const { colorMode, setColorMode } = useThemeMode()

  const theme = useTheme()
  return (
    <StyledToggleButton>
      <Icon
        height={'80%'}
        style={{
          paddingTop: '10%',
          color: `${theme.colors.text}`
        }}
        icon={colorMode === 'darkTheme' ? 'akar-icons:sun' : 'ci:moon'}
        onClick={setColorMode}
      />
    </StyledToggleButton>
  )
}

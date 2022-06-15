import React from 'react'
import { Icon } from '@iconify/react'
import { useTheme as useThemeMode } from '../../../context/ThemeContextProvider/themecontext'
import StyledToggleButton from '../../atom/StyledToggleButton/StyledToggleButton'
import { useTheme } from '@emotion/react'

const ModeToggleButton: React.FC = () => {
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

export default ModeToggleButton

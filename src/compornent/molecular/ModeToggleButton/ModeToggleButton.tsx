import React from 'react'
import { Icon } from '@iconify/react'
import { useTheme } from '../../../context/themecontext'
import StyledToggleButton from '../../atom/StyledToggleButton/StyledToggleButton'

const ModeToggleButton: React.FC = () => {
  const { colorMode, setColorMode } = useTheme()
  return (
    <StyledToggleButton>
      <Icon
        height={'80%'}
        style={{ paddingTop: '10%' }}
        icon={colorMode === 'darkTheme' ? 'akar-icons:sun' : 'ci:moon'}
        onClick={setColorMode}
      />
    </StyledToggleButton>
  )
}

export default ModeToggleButton

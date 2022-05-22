import React from 'react'
import { Icon } from '@iconify/react'
import { useTheme } from '../../../context/themecontext'
import StyledToggleButton from '../../atom/StyledToggleButton/StyledToggleButton'

const ModeToggleButton: React.FC = () => {
  const { setColorMode } = useTheme()
  return (
    <StyledToggleButton>
      <Icon height={'80%'} style={{ paddingTop: '10%' }} icon={'akar-icons:sun'} onClick={setColorMode} />
    </StyledToggleButton>
  )
}

export default ModeToggleButton

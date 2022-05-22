import React from 'react'
import { Icon } from '@iconify/react'
import { useTheme } from '../../../context/themecontext'

const ModeToggleButton: React.FC = () => {
  const { setColorMode } = useTheme()
  return (
    <div>
      <Icon icon={'akar-icons:sun'} onClick={setColorMode} />
    </div>
  )
}

export default ModeToggleButton

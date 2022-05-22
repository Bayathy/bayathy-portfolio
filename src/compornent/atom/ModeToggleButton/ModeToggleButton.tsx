import React from 'react'
import { Icon } from '@iconify/react'
import { useTheme } from '../../../context/themecontext'

const ModeToggleButton: React.FC = () => {
  const { colorMode, setColorMode } = useTheme()
  return (
    <div>
      <p>current color mode: {colorMode}</p>
      <button onClick={setColorMode}>toggle color mode</button>
      <Icon icon={'akar-icons:sun'}></Icon>
    </div>
  )
}

export default ModeToggleButton

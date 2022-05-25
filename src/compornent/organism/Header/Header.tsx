import React from 'react'
import { css, useTheme } from '@emotion/react'
import ModeToggleButton from '../../molecular/ModeToggleButton/ModeToggleButton'

const Header: React.FC = () => {
  const theme = useTheme()

  return (
    <div
      css={css`
        position: relative;
        width: 100vw;
        background: ${theme.colors.secondary};
        height: 15%;
      `}
    >
      <ModeToggleButton />
    </div>
  )
}

export default Header

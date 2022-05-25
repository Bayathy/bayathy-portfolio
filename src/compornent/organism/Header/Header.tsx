import React from 'react'
import { css, useTheme } from '@emotion/react'
import ModeToggleButton from '../../molecular/ModeToggleButton/ModeToggleButton'
import ContentContainer from '../../atom/ContentContainer/ContentContainer'

const Header: React.FC = () => {
  const theme = useTheme()

  return (
    <div
      css={css`
        position: relative;
        width: 100vw;
        background: ${theme.colors.secondary};
        height: 5rem;
        margin: 0;
        display: flex;
        justify-content: end;
        align-items: center;
      `}
    >
      <ContentContainer>
        <ModeToggleButton />
      </ContentContainer>
    </div>
  )
}

export default Header

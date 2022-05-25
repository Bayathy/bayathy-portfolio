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
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      <ContentContainer>
        <div
          css={css`
            display: flex;
            justify-content: end;
          `}
        >
          <div
            css={css`
              padding-right: 1rem;
            `}
          >
            <ModeToggleButton />
          </div>
        </div>
      </ContentContainer>
    </div>
  )
}

export default Header

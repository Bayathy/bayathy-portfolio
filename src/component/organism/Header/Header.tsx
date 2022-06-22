import React from 'react'
import { css, useTheme } from '@emotion/react'
import { ModeToggleButton } from '../../molecular'
import { ContentContainer } from '../../atom'

export const Header: React.FC = () => {
  const theme = useTheme()

  return (
    <div
      css={css`
        position: fixed;
        top: 0;
        width: 100vw;
        background: ${theme.colors.secondary};
        height: 3.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999;
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
              padding-right: 2rem;
            `}
          >
            <ModeToggleButton />
          </div>
        </div>
      </ContentContainer>
    </div>
  )
}

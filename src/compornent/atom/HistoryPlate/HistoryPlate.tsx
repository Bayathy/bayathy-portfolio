import { css, useTheme } from '@emotion/react'
import React from 'react'

type HistoryPlate = {
  text: string
}

const HistoryPlate: React.FC<HistoryPlate> = ({ text }) => {
  const theme = useTheme()

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        position: relative;
      `}
    >
      <div
        css={css`
          position: absolute;
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          left: 1rem;
          @media (min-width: 420px) {
            left: 2rem;
          }
          background: ${theme.colors.text};
        `}
      />
      <div
        css={css`
          padding-left: 2.5rem;
          @media (min-width: 420px) {
            padding-left: 4rem;
          }
          width: 100%;
        `}
      >
        <div
          css={css`
            width: 90%;
            border-radius: 10px;
            background: ${theme.colors.extra};
          `}
        >
          <p
            css={css`
              padding: 1rem;
            `}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  )
}

export default HistoryPlate

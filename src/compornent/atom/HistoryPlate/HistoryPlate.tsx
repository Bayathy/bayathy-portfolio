import { css, useTheme } from '@emotion/react'
import React from 'react'

type HistoryPlate = {
  text: string
}

const HistoryPlate: React.FC<HistoryPlate> = ({ text }) => {
  const theme = useTheme()

  return (
    <div
      className="plate"
      css={css`
        display: flex;
        align-items: center;
      `}
    >
      <div
        css={css`
          position: absolute;
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          left: 2rem;
          background-color: white;
        `}
      />
      <div
        css={css`
          padding-left: 4rem;
          width: 100%;
        `}
      >
        <div
          css={css`
            width: 85%;
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

import { css, useTheme } from '@emotion/react'
import React from 'react'

type HistoryPlate = {
  text: string
  date: string
}

const HistoryPlate: React.FC<HistoryPlate> = ({ text, date }) => {
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
          width: 0.8rem;
          height: 0.8rem;
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
            line-height: 1;
            display: flex;
            align-items: baseline;
            padding: 1rem;
          `}
        >
          <p>{date}</p>
          <p
            css={css`
              padding-left: 2rem;
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

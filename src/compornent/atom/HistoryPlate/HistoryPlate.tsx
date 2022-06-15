import React from 'react'
import { css, useTheme } from '@emotion/react'

type HistoryPlate = {
  text: string
}

const HistoryPlate: React.FC<HistoryPlate> = ({ text }) => {
  const theme = useTheme()

  return (
    <div
      css={css`
        width: 60%;
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
  )
}

export default HistoryPlate

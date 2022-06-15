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
        background: ${theme.colors.extra};
      `}
    >
      <p>{text}</p>
    </div>
  )
}

export default HistoryPlate

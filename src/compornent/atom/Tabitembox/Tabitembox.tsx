import React from 'react'
import { css, useTheme } from '@emotion/react'

type Tabitem = {
  name: string
  isSlect: boolean
}

const Tabitembox: React.FC<Tabitem> = ({ name, isSlect }) => {
  const theme = useTheme()

  const borderStyle =
    isSlect == true
      ? css`
          border-bottom: 0.3rem solid ${theme.colors.secondary};
        `
      : undefined

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30%;
        font-size: 1rem;
        padding-top: 10px;
        padding-bottom: 10px;
        ${borderStyle}
      `}
    >
      <p>{name}</p>
    </div>
  )
}

export default Tabitembox

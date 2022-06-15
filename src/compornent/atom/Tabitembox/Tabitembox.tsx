import React from 'react'
import { css, useTheme } from '@emotion/react'

type Tabitem = {
  name: string
  isSlect: boolean
  // eslint-disable-next-line @typescript-eslint/ban-types
  onClick?: Function
}

const Tabitembox: React.FC<Tabitem> = ({ name, isSlect, onClick }) => {
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
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      onClick={onClick}
    >
      <p>{name}</p>
    </div>
  )
}

export default Tabitembox

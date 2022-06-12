import React from 'react'
import { css } from '@emotion/react'

type Tabitem = {
  name: string
}

const Tabitembox: React.FC<Tabitem> = ({ name }) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 33%;
        font-size: 1rem;
        padding-top: 10px;
        padding-bottom: 10px;
      `}
    >
      <p>{name}</p>
    </div>
  )
}

export default Tabitembox

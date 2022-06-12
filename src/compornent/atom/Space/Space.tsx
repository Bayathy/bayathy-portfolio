import React from 'react'
import { css } from '@emotion/react'

type Space = {
  space: number
}
const Space: React.FC<Space> = ({ space }) => {
  return (
    <div
      css={css`
        margin: ${space}rem;
      `}
    />
  )
}

export default Space

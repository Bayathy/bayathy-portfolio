import React from 'react'
import { css } from '@emotion/react'

type Space = {
  space: number
  margin?: boolean
  padding?: boolean
}

const Space: React.FC<Space> = ({ space, margin, padding }) => {
  return (
    <>
      {margin && (
        <div
          css={css`
            margin-bottom: ${space}rem;
          `}
        />
      )}
      {padding && (
        <div
          css={css`
            padding-bottom: ${space}rem;
          `}
        />
      )}
    </>
  )
}

export default Space

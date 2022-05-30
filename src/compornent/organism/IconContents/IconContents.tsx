import React from 'react'
import HomeIconBox from '../../molecular/Homeiconbox/HomeIconBox'
import { css } from '@emotion/react'

const IconContents: React.FC = () => {
  return (
    <div
      css={css`
        margin-top: 3rem;
      `}
    >
      <HomeIconBox />
    </div>
  )
}

export default IconContents

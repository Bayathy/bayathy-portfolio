import React from 'react'
import { css } from '@emotion/react'
import Image from 'next/image'
import Imagesrc from './pennginn2.png'

const Myicon: React.FC = () => {
  return (
    <div
      css={css`
        height: 9rem;
        width: 9rem;
        border-radius: 999px;
        position: relative;
      `}
    >
      <Image src={Imagesrc} layout={'fill'} style={{ borderRadius: 999 }} />
    </div>
  )
}

export default Myicon

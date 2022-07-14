import React from 'react'
import { css } from '@emotion/react'
import Image from 'next/image'

export const Myicon: React.FC = () => {
   return (
      <div
         css={css`
            height: 9rem;
            width: 9rem;
            border-radius: 999px;
            position: relative;
         `}
      >
         <Image
            src={'/Icon3.jpg'}
            layout={'fill'}
            alt={'My Icon'}
            style={{ borderRadius: 999, zIndex: 1 }}
            priority
            placeholder="blur"
            blurDataURL={'/Icon3.jpg'}
         />
      </div>
   )
}

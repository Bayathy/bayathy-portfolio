import React from 'react'
import Image from 'next/image'
import { css } from '@emotion/react'
import { ContentContainer } from '../../atom'

export const WorkDeteal: React.FC = () => {
  return (
    <>
      <ContentContainer>
        <div
          css={css`
            position: relative;
            width: 80%;
            margin: auto;
            aspect-ratio: 16 /9;
          `}
        >
          <Image src={'/Icon3.jpg'} layout={'fill'} objectFit={'cover'} />
        </div>
      </ContentContainer>
    </>
  )
}

import React from 'react'
import Image from 'next/image'
import { css } from '@emotion/react'
import { ContentContainer, Space, WorkTitle } from '../../atom'

export const WorkDeteal: React.FC = () => {
  return (
    <>
      <ContentContainer>
        <div
          css={css`
            position: relative;
            width: 70%;
            margin: auto;
            aspect-ratio: 16 /9;
          `}
        >
          <Image
            style={{ borderRadius: '10px' }}
            src={'/Icon3.jpg'}
            layout={'fill'}
            objectFit={'cover'}
          />
        </div>
        <Space space={3} margin />
        <div>
          <WorkTitle />
        </div>
      </ContentContainer>
    </>
  )
}

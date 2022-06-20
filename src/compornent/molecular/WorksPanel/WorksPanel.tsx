import React from 'react'
import { Card, ContentContainer } from '../../atom'
import Image from 'next/image'
import { css, useTheme } from '@emotion/react'
import Imagesrc from './Icon2.jpg'

export const WorksPanel: React.FC = () => {
  const theme = useTheme()
  return (
    <ContentContainer>
      <Card
        style={css`
          width: 20rem;
          height: 18rem;
          margin: auto;
          display: flex;
          flex-direction: column;
        `}
      >
        <div
          css={css`
            height: 14rem;
            width: 20rem;
            position: relative;
          `}
        >
          <Image
            src={Imagesrc}
            objectFit={'cover'}
            layout="fill"
            style={{ borderRadius: '10px 10px 0px 0px' }}
          />
        </div>
        <div
          css={css`
            padding: ${theme.padding.small};
            font-weight: bold;
            font-size: 1.5rem;
            display: flex;
            justify-content: center;
            align-content: center;
          `}
        >
          <p>test</p>
        </div>
      </Card>
    </ContentContainer>
  )
}

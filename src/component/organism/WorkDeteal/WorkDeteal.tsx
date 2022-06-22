import React from 'react'
import Image from 'next/image'
import { css, useTheme } from '@emotion/react'
import { Card, ContentContainer, Space, WorkTitle } from '../../atom'

export const WorkDeteal: React.FC = () => {
  const theme = useTheme()

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
        <Space space={2} margin />
        <Card
          style={css`
            width: 80%;
            margin: auto;
          `}
        >
          <p
            css={css`
              padding: ${theme.padding.small};
            `}
          >
            HackUで制作した作品です。高専生の五人でチームを組みいくつか賞を受賞しました。
          </p>
        </Card>
      </ContentContainer>
    </>
  )
}

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
            padding: ${theme.padding.small};
          `}
        >
          <p>HackUで制作した作品です。高専生の五人でチームを組みいくつか賞を受賞しました。</p>
          <Space space={1} margin />
          <div
            css={css`
              width: max-content;
              background: ${theme.colors.primary};
              text-align: center;
              border-radius: 20px;
              font-size: 0.8rem;
            `}
          >
            <p
              css={css`
                padding: 0.5rem;
                line-height: 1;
              `}
            >
              技術スタック
            </p>
          </div>
        </Card>
      </ContentContainer>
    </>
  )
}

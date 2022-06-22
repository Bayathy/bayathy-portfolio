import React from 'react'
import { css, useTheme } from '@emotion/react'
import { Card, Space } from '../../atom'

export const WorkdetealCard: React.FC = () => {
  const theme = useTheme()

  return (
    <Card
      style={css`
        width: 80%;
        margin: auto;
        padding: ${theme.padding.small};
      `}
    >
      <div
        css={css`
          padding: 0.5rem;
        `}
      >
        <p>HackUで制作した作品です。高専生の五人でチームを組みいくつか賞を受賞しました。</p>
      </div>
      <Space space={1} margin />
      <div
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
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
        <p
          css={css`
            padding: 0.8rem;
            line-height: 1;
          `}
        >
          テクノロジー
        </p>
      </div>
    </Card>
  )
}

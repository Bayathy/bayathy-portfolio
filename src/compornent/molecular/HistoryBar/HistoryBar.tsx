import { css, useTheme } from '@emotion/react'
import React from 'react'
import ContentContainer from '../../atom/ContentContainer/ContentContainer'
import HistoryPlate from '../../atom/HistoryPlate/HistoryPlate'

const HistoryBar: React.FC = () => {
  const theme = useTheme()

  const textlist: string[] = ['a', 'b', 'c', 'd', 'c', 'f']
  return (
    <ContentContainer
      style={css`
        width: 90%;
      `}
    >
      <div
        css={css`
          .plate:not(:last-child)::before {
            content: '';
            position: absolute;
            left: 1.4rem;
            @media (min-width: 420px) {
              left: 2.4rem;
            }
            top: 1.8rem;
            bottom: 0;
            width: 0.2rem;
            height: 100%;
            background: ${theme.colors.text};
          }
        `}
      >
        {textlist.map((index, key) => (
          <div
            className={'plate'}
            css={css`
              position: relative;
            `}
            key={key}
          >
            <HistoryPlate text={index} key={key} />
            <div
              css={css`
                padding-bottom: ${theme.padding.medium};
                width: 1%;
              `}
            />
          </div>
        ))}
      </div>
    </ContentContainer>
  )
}

export default HistoryBar

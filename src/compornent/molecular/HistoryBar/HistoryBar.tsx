import { css, useTheme } from '@emotion/react'
import React from 'react'
import ContentContainer from '../../atom/ContentContainer/ContentContainer'
import HistoryPlate from '../../atom/HistoryPlate/HistoryPlate'

const HistoryBar: React.FC = () => {
  const theme = useTheme()

  const textlist: string[] = ['a', 'b', 'c']
  return (
    <ContentContainer
      style={css`
        position: relative;
        margin: auto;
        width: 90%;
      `}
    >
      <div
        css={css`
          .plate::before {
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
            background: white;
          }

          .plate:last-child:before {
            content: '';
            background: ${theme.colors.primary};
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
              `}
            />
          </div>
        ))}
      </div>
    </ContentContainer>
  )
}

export default HistoryBar

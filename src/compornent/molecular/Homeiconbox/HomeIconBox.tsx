import React from 'react'
import { css } from '@emotion/react'
import { ContentContainer, Myicon } from '../../atom'

export const HomeIconBox: React.FC = () => {
  return (
    <ContentContainer>
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          @media (min-width: 480px) {
            flex-direction: row;
          }
          gap: 15%;
          max-width: 90%;
          margin: auto;
        `}
      >
        <div>
          <Myicon />
        </div>
        <div
          css={css`
            max-width: 35%;
          `}
        >
          <p
            css={css`
              font-size: 2rem;
              font-weight: bold;
            `}
          >
            Bayathy
          </p>
        </div>
      </div>
    </ContentContainer>
  )
}

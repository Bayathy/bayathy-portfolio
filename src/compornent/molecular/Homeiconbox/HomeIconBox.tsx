import React from 'react'
import ContentContainer from '../../atom/ContentContainer/ContentContainer'
import Myicon from '../../atom/MyIcon/Myicon'
import { css } from '@emotion/react'

const HomeIconBox: React.FC = () => {
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

export default HomeIconBox

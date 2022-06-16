import { css } from '@emotion/react'
import React from 'react'
import ContentContainer from '../../atom/ContentContainer/ContentContainer'
import HistoryPlate from '../../atom/HistoryPlate/HistoryPlate'

const HistoryBar: React.FC = () => {
  return (
    <ContentContainer
      style={css`
        position: relative;
        margin: auto;
        width: 80%;
      `}
    >
      <div
        css={css`
          .plate:before {
            content: '';
            position: absolute;
            left: 2.4rem;
            top: 1.8rem;
            bottom: 0;
            width: 0.2rem;
            background: black;
          }

          .plate:last-child:before {
            content: '';
            position: absolute;
            left: 2.4rem;
            top: 1.8rem;
            bottom: 0;
            width: 0.2rem;
            background: white;
          }
        `}
      >
        <HistoryPlate text={'test'} />
        <HistoryPlate text={'test'} />
        <HistoryPlate text={'test'} />
        <HistoryPlate text={'test'} />
      </div>
    </ContentContainer>
  )
}

export default HistoryBar

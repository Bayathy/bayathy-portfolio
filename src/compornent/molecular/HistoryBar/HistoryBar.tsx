import React from 'react'
import ContentContainer from '../../atom/ContentContainer/ContentContainer'
import { css } from '@emotion/react'
import HistoryPlate from '../../atom/HistoryPlate/HistoryPlate'

const HistoryBar: React.FC = () => {
  return (
    <ContentContainer
      style={css`
        position: relative;
      `}
    >
      <div
        css={css`
          :before {
            content: '';
            position: absolute;
            left: 2.4rem;
            top: 1.8rem;
            bottom: 0;
            width: 0.2rem;
            background: black;
            z-index: 10;
          }

          .plate:last-child:before {
            content: '';
            position: absolute;
            left: 2.4rem;
            top: 1.8rem;
            bottom: 0;
            width: 0.2rem;
            background: white;
            z-index: 10;
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

import React from 'react'
import ContentContainer from '../../atom/ContentContainer/ContentContainer'
import HistoryPlate from '../../atom/HistoryPlate/HistoryPlate'

const HistoryBar: React.FC = () => {
  return (
    <ContentContainer>
      <HistoryPlate text={'test'} />
    </ContentContainer>
  )
}

export default HistoryBar

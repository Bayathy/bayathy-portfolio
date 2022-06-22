import React from 'react'
import { css } from '@emotion/react'
import { GlobalStyle } from '../../../style/global'
import { Header } from '../../organism'
import { WorkDeteal } from '../../organism/WorkDeteal/WorkDeteal'
import { Space } from '../../atom'

export const WorksLayout: React.FC = () => {
  return (
    <div
      css={css`
        margin: auto;
      `}
    >
      <GlobalStyle />
      <Header />
      <Space space={7.5} margin />
      <WorkDeteal />
    </div>
  )
}

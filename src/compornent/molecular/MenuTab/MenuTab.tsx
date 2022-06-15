import React from 'react'
import Tabitembox from '../../atom/Tabitembox/Tabitembox'
import { css, useTheme } from '@emotion/react'
import ContentContainer from '../../atom/ContentContainer/ContentContainer'
import { usePageState } from '../../../context/PageContextProvider/pageContext'

const MenuTab: React.FC = () => {
  const theme = useTheme()
  const { page, setPage } = usePageState()

  return (
    <ContentContainer>
      <div
        css={css`
          display: flex;
          width: 80%;
          margin: auto;
          align-items: center;
          justify-content: space-around;
          background: ${theme.colors.extra};
          border-radius: 10px;
        `}
      >
        <Tabitembox name={'About Me'} isSlect={page[0]} onClick={() => setPage(0)} />
        <Tabitembox name={'Works'} isSlect={page[1]} onClick={() => setPage(1)} />
        <Tabitembox name={'Blog'} isSlect={page[2]} onClick={() => setPage(2)} />
      </div>
    </ContentContainer>
  )
}

export default MenuTab

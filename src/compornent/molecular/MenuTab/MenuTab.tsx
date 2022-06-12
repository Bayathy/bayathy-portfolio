import React from 'react'
import Tabitembox from '../../atom/Tabitembox/Tabitembox'
import { css, useTheme } from '@emotion/react'
import ContentContainer from '../../atom/ContentContainer/ContentContainer'

const MenuTab: React.FC = () => {
  const theme = useTheme()

  const Testfunc = () => {
    alert('ok')
  }
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
        <Tabitembox name={'About Me'} isSlect={true} onClick={Testfunc} />
        <Tabitembox name={'Works'} isSlect={true} />
        <Tabitembox name={'Blog'} isSlect={true} />
      </div>
    </ContentContainer>
  )
}

export default MenuTab

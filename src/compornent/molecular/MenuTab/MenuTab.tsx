import React from 'react'
import Tabitembox from '../../atom/Tabitembox/Tabitembox'
import { css, useTheme } from '@emotion/react'
import ContentContainer from '../../atom/ContentContainer/ContentContainer'

const MenuTab: React.FC = () => {
  const theme = useTheme()

  return (
    <ContentContainer>
      <div
        css={css`
          display: flex;
          width: 80%;
          margin: auto;
          align-items: center;
          justify-content: center;
          background: ${theme.colors.extra};
          border-radius: 10px;
        `}
      >
        <Tabitembox name={'About Me'} />
        <Tabitembox name={'Works'} />
        <Tabitembox name={'Blog'} />
      </div>
    </ContentContainer>
  )
}

export default MenuTab

import React, { useState } from 'react'
import Tabitembox from '../../atom/Tabitembox/Tabitembox'
import { css, useTheme } from '@emotion/react'
import ContentContainer from '../../atom/ContentContainer/ContentContainer'

const MenuTab: React.FC = () => {
  const theme = useTheme()
  const [isSelect, setSelect] = useState<boolean[]>([true, false, false])

  const Togglemenu = (id: number) => {
    setSelect(isSelect.map((item, i) => (i === id ? true : false)))
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
        <Tabitembox name={'About Me'} isSlect={isSelect[0]} onClick={() => Togglemenu(0)} />
        <Tabitembox name={'Works'} isSlect={isSelect[1]} onClick={() => Togglemenu(1)} />
        <Tabitembox name={'Blog'} isSlect={isSelect[2]} onClick={() => Togglemenu(2)} />
      </div>
    </ContentContainer>
  )
}

export default MenuTab

import React from 'react'
import { css, Global, useTheme } from '@emotion/react'
import Header from '../../organism/Header/Header'
import Myicon from '../../atom/MyIcon/Myicon'

const MainLayout: React.FC = () => {
  const theme = useTheme()

  return (
    <div
      css={css`
        margin: auto;
      `}
    >
      <Global
        styles={css`
          body {
            background: ${theme.colors.primary};
            color: ${theme.colors.text};
            line-height: 1.7;
            box-sizing: border-box;
          }

          * {
            margin: 0;
            padding: 0;
          }
        `}
      />
      <Header />
      <Myicon />
    </div>
  )
}

export default MainLayout

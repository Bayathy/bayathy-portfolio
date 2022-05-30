import React from 'react'
import { css, Global, useTheme } from '@emotion/react'
import Header from '../../organism/Header/Header'
import IconContents from '../../organism/IconContents/IconContents'

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
            font-family: 'Noto Sans JP', sans-serif;
            user-select: none;
          }
        `}
      />
      <Header />
      <IconContents />
    </div>
  )
}

export default MainLayout

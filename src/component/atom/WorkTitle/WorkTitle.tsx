import React from 'react'
import { css, useTheme } from '@emotion/react'

type WorkTitle = {
  title?: string
}

export const WorkTitle: React.FC<WorkTitle> = ({ title }) => {
  const theme = useTheme()

  return (
    <div
      css={css`
        width: 90%;
        margin: auto;
      `}
    >
      <p
        css={css`
          padding-left: ${theme.padding.small};
          border-bottom: 1px solid ${theme.colors.text};
          font-size: 2rem;
          line-height: 1;
        `}
      >
        test
      </p>
    </div>
  )
}

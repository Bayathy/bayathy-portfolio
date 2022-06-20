import React from 'react'

import { css, useTheme } from '@emotion/react'
import { Card, ContentContainer } from '../../atom'

export const SkillsCard: React.FC = () => {
  const theme = useTheme()
  return (
    <ContentContainer>
      <Card
        style={css`
          width: 90%;
          margin: auto;
        `}
      >
        <div
          css={css`
            padding: ${theme.padding.small};
          `}
        >
          <div>
            <p>あいうえお</p>
          </div>
        </div>
      </Card>
    </ContentContainer>
  )
}

import React from 'react'
import Card from '../../atom/Card/Card'
import ContentContainer from '../../atom/ContentContainer/ContentContainer'
import { css, useTheme } from '@emotion/react'

const SkillsCard: React.FC = () => {
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
            <p>test</p>
          </div>
        </div>
      </Card>
    </ContentContainer>
  )
}

export default SkillsCard

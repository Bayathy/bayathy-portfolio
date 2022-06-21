import React from 'react'
import { Card, ContentContainer } from '../../atom'
import { useTheme, css } from '@emotion/react'

export const WorksPanel: React.FC = () => {
  const theme = useTheme()
  return (
    <ContentContainer>
      <Card
        style={css`
          width: 18rem;
        `}
      >
        <div>
          <div>
            <p
              css={css`
                text-align: center;
              `}
            >
              test
            </p>
          </div>
        </div>
      </Card>
    </ContentContainer>
  )
}

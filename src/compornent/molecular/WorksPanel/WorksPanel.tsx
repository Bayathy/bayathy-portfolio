import React from 'react'
import { Card, ContentContainer } from '../../atom'
import { css, useTheme } from '@emotion/react'
import { Icon } from '@iconify/react'

export const WorksPanel: React.FC = () => {
  const theme = useTheme()
  return (
    <ContentContainer>
      <div
        css={css`
          box-sizing: inherit;
          width: max-content;
          position: relative;
        `}
      >
        <div
          css={css`
            position: absolute;
            top: -0.5rem;
            left: 16.5rem;
            z-index: 999;
            border-radius: 999px;
            width: 1.2rem;
            height: 1.2rem;
            padding: 0.5rem;
            background: ${theme.colors.extra};

            :hover {
              border: 1px black solid;
            }
          `}
        >
          <Icon width={'100%'} icon="charm:link-external" />
        </div>
        <Card
          className={'Card'}
          style={css`
            width: 18rem;
            position: relative;

            :hover {
              border: 1px solid black;
            }
          `}
        >
          <div
            css={css`
              padding: ${theme.padding.small};
            `}
          >
            <div
              css={css`
                width: 30%;
                margin: auto;
              `}
            >
              <Icon width={'100%'} icon="charm:people"></Icon>
            </div>
            <div>
              <p
                css={css`
                  text-align: center;
                  font-size: 1.5rem;
                `}
              >
                Title
              </p>
            </div>
          </div>
        </Card>
      </div>
    </ContentContainer>
  )
}

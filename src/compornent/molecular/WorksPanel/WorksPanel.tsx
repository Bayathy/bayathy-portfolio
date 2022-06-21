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
          position: relative;
        `}
      >
        <Card
          className={'Card'}
          style={css`
            width: 16rem;
            position: relative;
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
                  line-height: 1;
                `}
              >
                Title
              </p>
            </div>
            <div>
              <p
                css={css`
                  font-size: 0.8rem;
                  text-align: center;
                  font-weight: lighter;
                  line-height: 2;
                `}
              >
                HackU KOSEN
              </p>
            </div>
            <div
              css={css`
                display: flex;
                align-content: end;
                justify-content: end;
              `}
            >
              <div
                css={css`
                  padding: 0.5rem;
                  border-radius: 999px;
                  background: ${theme.colors.primary};
                  display: flex;
                  justify-content: center;
                  align-content: center;
                `}
              >
                <Icon icon="charm:link-external" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </ContentContainer>
  )
}

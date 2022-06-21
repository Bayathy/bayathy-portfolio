import React from 'react'
import { css, useTheme } from '@emotion/react'
import { Card, ContentContainer } from '../../atom'

export const Modal: React.FC = () => {
  const theme = useTheme()
  return (
    <>
      <div
        css={css`
          display: block;
          width: 100%;
          height: 100%;
          position: fixed;
          background-color: #000;
          opacity: 0.7;
          top: 0;
          left: 0;
          z-index: 999;
        `}
      />
      <ContentContainer>
        <Card
          style={css`
            position: fixed;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            margin: auto;
            height: 20rem;
            width: 20rem;
            background: ${theme.colors.secondary};
            opacity: 1;
            z-index: 10000;
            overflow-y: scroll;

            ::-webkit-scrollbar {
              width: 5px;
              height: 20px;
            }

            ::-webkit-scrollbar-track {
              background-color: ${theme.colors.secondary};
              border-radius: 10px;
            }

            ::-webkit-scrollbar-thumb {
              background: ${theme.colors.extra};
              border-radius: 100px;
            }
          `}
        >
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
        </Card>
      </ContentContainer>
    </>
  )
}

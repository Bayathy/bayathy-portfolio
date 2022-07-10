import { css, Global, useTheme } from '@emotion/react'
import React from 'react'

export function GlobalStyle() {
   const theme = useTheme()

   return (
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
               user-select: none;
               font-family: 'Mingzat', 'Kosugi Maru', sans-serif;
            }

            ::-webkit-scrollbar {
               width: 10px;
               height: 20px;
            }

            ::-webkit-scrollbar-track {
               background-color: ${theme.colors.secondary};
            }

            ::-webkit-scrollbar-thumb {
               background: ${theme.colors.extra};
               border-radius: 100px;
            }
         `}
      />
   )
}

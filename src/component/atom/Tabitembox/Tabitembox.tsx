import React from 'react'
import { css, useTheme } from '@emotion/react'

type Tabitem = {
   name: string
   isSlect: boolean
   // eslint-disable-next-line @typescript-eslint/ban-types
   onClick?: Function
}

const Tabitembox: React.FC<Tabitem> = ({ name, isSlect, onClick }) => {
   const theme = useTheme()

   const borderStyle =
      isSlect == true
         ? css`
              color: ${theme.colors.text};
           `
         : css`
              color: ${theme.colors.text};
              opacity: 0.2;
           `

   return (
      <div
         css={css`
            display: flex;
            width: 30%;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            padding-top: 10px;
            padding-bottom: 10px;
            font-weight: bold;
            ${borderStyle}
         `}
         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
         // @ts-ignore
         onClick={onClick}
      >
         <p>{name}</p>
      </div>
   )
}

export { Tabitembox }

import React from 'react'
import { css } from '@emotion/react'

export const DropdownMenu = (props: React.ComponentProps<'div'>) => {
   return (
      <div {...props}>
         <div
            css={css`
               font-size: 1.3rem;
            `}
         >
            <p>Bayathy</p>
         </div>
      </div>
   )
}

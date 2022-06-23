import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { css, useTheme } from '@emotion/react'
import { ContentContainer, Space, WorkTitle } from '../../atom'
import { WorkdetealCard } from '../../molecular'
import { getpostData } from '../../../lib/post'

export const WorkDeteal: React.FC = () => {
   const theme = useTheme()

   const [testtext, setText] = useState('')

   useEffect(() => {
      const titlePromise = getpostData('test')
      titlePromise.then((data) => {
         setText(data.title)
      })
   })

   return (
      <>
         <ContentContainer>
            <div
               css={css`
                  position: relative;
                  width: 70%;
                  margin: auto;
                  aspect-ratio: 16 /9;
               `}
            >
               <Image
                  style={{ borderRadius: '10px' }}
                  src={'/Icon3.jpg'}
                  layout={'fill'}
                  objectFit={'cover'}
               />
            </div>
            <Space space={3} margin />
            <div>
               <WorkTitle />
            </div>
            <Space space={2} margin />
            <WorkdetealCard />
         </ContentContainer>
      </>
   )
}

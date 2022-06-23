import React, { useEffect } from 'react'
import Image from 'next/image'
import { css, useTheme } from '@emotion/react'
import { ContentContainer, Space, WorkTitle } from '../../atom'
import { WorkdetealCard } from '../../molecular'
import { getpostData, Workpostmatter } from '../../../lib/post'

type Workpost = {
   testtext: Workpostmatter
}

export async function getServerSideProps() {
   const testtext = await getpostData('test').then((data) => data)

   return {
      props: {
         testtext
      } // will be passed to the page component as props
   }
}

export const WorkDeteal: React.FC<Workpost> = ({ testtext }) => {
   const theme = useTheme()

   useEffect(() => {
      alert(testtext)
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

import React from 'react'
import Image from 'next/image'
import { css, useTheme } from '@emotion/react'
import { ContentContainer, Space, TitleTypography } from '../../atom'
import { WorkdetealCard } from '../../molecular'
import { WorkPost } from '../../../type/Workpost'

export const WorkDeteal: React.FC<WorkPost> = ({ data }) => {
   const theme = useTheme()

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
                  src={data.ImageURL! ? data.ImageURL : '/dummy.jpg'}
                  layout={'fill'}
                  objectFit={'cover'}
                  alt={data.title}
               />
            </div>
            <Space space={3} margin />
            <div>
               <TitleTypography title={data.title} />
            </div>
            <Space space={2} margin />
            <WorkdetealCard data={data} />
         </ContentContainer>
      </>
   )
}

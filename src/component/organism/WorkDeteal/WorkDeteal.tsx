import React from 'react'
import { ContentContainer } from '../../atom'
import Image from 'next/image'

export const WorkDeteal: React.FC = () => {
  return (
    <>
      <ContentContainer>
        <div>
          <Image src={'/dummy.png'} width={100} height={100} />
        </div>
      </ContentContainer>
    </>
  )
}

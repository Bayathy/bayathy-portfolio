import React, { useEffect } from 'react'
import { BaseLayout } from '../BaseLayout'
import { BlogPost } from '../../../type/Blogpost'
import { ContentContainer } from '../../atom'

export const ArticleLayout: React.FC<BlogPost> = ({ data }) => {
   useEffect(() => console.log(data.content))

   return (
      <BaseLayout>
         <ContentContainer>
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
         </ContentContainer>
      </BaseLayout>
   )
}

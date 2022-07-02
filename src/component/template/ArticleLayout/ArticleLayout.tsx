import React from 'react'
import { BaseLayout } from '../BaseLayout'
import { BlogPost } from '../../../type/Blogpost'

export const ArticleLayout: React.FC<BlogPost> = ({ data }) => {
   return (
      <BaseLayout>
         <div dangerouslySetInnerHTML={{ __html: data.content }} />
      </BaseLayout>
   )
}

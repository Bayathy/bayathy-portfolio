import { css } from '@emotion/react'
import React from 'react'
import { usePageState } from '../../../context/PageContextProvider/pageContext'
import ContentContainer from '../ContentContainer/ContentContainer'

const PageTitle: React.FC = () => {
  const { page } = usePageState()
  const title = page[0] ? 'About' : page[1] ? 'Works' : 'Blog'

  return (
    <ContentContainer>
      <div
        css={css`
          width: 90%;
          border-bottom: 2px solid white;
          margin: auto;
        `}
      >
        <p
          css={css`
            font-size: 1.5rem;
          `}
        >
          {title}
        </p>
      </div>
    </ContentContainer>
  )
}

export default PageTitle

import React from 'react'
import Head from 'next/head'

export type SEOProperty = {
   title?: string
   description?: string
   image?: string
   url?: string
}

export const SEO: React.FC<SEOProperty> = ({
   title,
   description,
   image,
   url
}) => {
   return (
      <Head>
         <title>{`Bayathy/${title}`}</title>
         <meta name="viewport" content="initial-scale=1" />
         <meta property="og:title" content={title} />
         <meta property="og:description" content={description} />
         <meta property="og:type" content="website" />
         <meta property="og:url" content={url} />
         <meta
            property="og:image"
            content={
               image
                  ? image
                  : 'https://res.cloudinary.com/dff7r0iah/image/upload/v1657348630/ogp-default_fhypwx.png'
            }
         />
         <meta property="og:site_name" content={title} />
         <meta name="twitter:card" content="summary_large_image" />
         <meta name="twitter:site" content="@Bayathy" />
         <meta name="twitter:url" content={url} />
         <meta name="twitter:title" content={title} />
         <meta name="twitter:description" content={description} />
         <meta
            name="twitter:image"
            content={
               image
                  ? image
                  : 'https://res.cloudinary.com/dff7r0iah/image/upload/v1657348630/ogp-default_fhypwx.png'
            }
         />
         <link rel="canonical" href={url} />
         <link rel="shortcut icon" href={'/magcup.ico'} />
         <link rel="apple-touch-icon" href={'/magcup.ico'} />
      </Head>
   )
}

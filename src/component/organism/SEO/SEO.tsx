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
         <meta property="og:title" content={title} />
         <meta property="og:description" content={description} />
         <meta property="og:type" content="blog" />
         <meta property="og:url" content={url} />
         <meta property="og:image" content={image} />
         <meta property="og:site_name" content={title} />
         <meta name="twitter:card" content="summary" />
         <meta name="twitter:site" content="@tcr_jp" />
         <meta name="twitter:url" content={image} />
         <meta name="twitter:title" content={title} />
         <meta name="twitter:description" content={description} />
         <meta name="twitter:image" content={image} />
         <link rel="canonical" href={url} />
         <link rel="shortcut icon" href={'/magcup.ico'} />
         <link rel="apple-touch-icon" href={'/magcup.ico'} />
      </Head>
   )
}

import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
   render() {
      return (
         <Html lang="ja">
            <Head>
               <link rel="preconnect" href="https://fonts.googleapis.com" />
               <link rel="preconnect" href="https://fonts.gstatic.com" />
               <link
                  href="https://fonts.googleapis.com/css2?family=Abel&family=Kosugi+Maru&family=Mingzat&display=swap"
                  rel="stylesheet"
               />
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      )
   }
}

export default MyDocument

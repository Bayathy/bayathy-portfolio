import type { AppProps } from 'next/app'
import PageContextProvider from '../context/PageContextProvider/PageContextProvider'
import ThemeContextProvider from '../context/ThemeContextProvider/ThemeContextProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <PageContextProvider>
        <Component {...pageProps} />
      </PageContextProvider>
    </ThemeContextProvider>
  )
}

export default MyApp

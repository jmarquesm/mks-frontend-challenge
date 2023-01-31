// types
import type { AppProps } from 'next/app'

// components
import { Footer } from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

// styles
import GlobalStyle from '@/styles/GlobalStyle'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />

      <GlobalStyle />

      <Component {...pageProps} />

      <Footer />
    </>
  )
}

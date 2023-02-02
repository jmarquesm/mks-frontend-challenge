// vendors
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

// components
import Footer from '@/components/Footer/Footer'

// types
import type { AppProps } from 'next/app'

// stores
import { persistor, store } from '@/store'

// styles
import GlobalStyle from '@/styles/GlobalStyle'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div>
          <GlobalStyle />

          <Component {...pageProps} />

          <Footer />
        </div>
      </PersistGate>
    </Provider>
  )
}

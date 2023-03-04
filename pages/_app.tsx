import 'styles/globals.css'
import styles from 'styles/App.module.css'

import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'

import { ThemeProvider, createTheme } from '@mui/material/styles'

import Header from 'components/Header'
import NavBar from 'components/NavBar'

import fa from 'locales/fa.json'
import en from 'locales/en.json'
import PageContainer from 'components/PageContainer'

const messages = {
  fa,
  en
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

const App = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter()
  return (
    <IntlProvider
      locale={locale as string}
      messages={messages[locale as keyof typeof messages]}
    >
      <ThemeProvider theme={darkTheme}>
        <main
          className={
            'w-full lg:border lg:border-slate-400 lg:py-10 lg:px-24 select-none lg:block ' +
            styles.Main
          }
          dir={locale == 'fa' ? 'rtl' : 'ltr'}
        >
          <Header />
          <PageContainer>
            <Component {...pageProps} />
          </PageContainer>
          <NavBar />
        </main>
      </ThemeProvider>
    </IntlProvider>
  )
}

export default App

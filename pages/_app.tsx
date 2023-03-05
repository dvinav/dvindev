import 'styles/globals.css'

import type { AppProps } from 'next/app'
import { IntlProvider } from 'react-intl'

import { ThemeProvider, createTheme } from '@mui/material/styles'

import Header from 'components/Header'
import NavBar from 'components/NavBar'

import fa from 'locales/fa.json'
import en from 'locales/en.json'

import TabContainer from 'layout/TabContainer'
import AppContainer from 'layout/AppContainer'

const messages = {
  fa,
  en
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <IntlProvider
      locale={router.locale as string}
      messages={messages[router.locale as keyof typeof messages]}
    >
      <ThemeProvider theme={darkTheme}>
        <AppContainer>
          <Header />
          <TabContainer>
            <Component {...pageProps} key={router.asPath} />
          </TabContainer>
          <NavBar />
        </AppContainer>
      </ThemeProvider>
    </IntlProvider>
  )
}

export default App

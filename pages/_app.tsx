import 'styles/globals.sass'
import styles from 'styles/modules/App.module.sass'

import type { AppProps } from 'next/app'
import { IntlProvider } from 'react-intl'

import { ThemeProvider } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'

import Header from 'components/Header'
import NavBar from 'components/NavBar'

import GetMessages from 'config/messages'
import GetTheme from 'config/theme'

export default function App({ Component, pageProps, router }: AppProps) {
  let locale: string = String(router.locale)

  return (
    <IntlProvider locale={locale} messages={GetMessages(locale)}>
      <ThemeProvider theme={GetTheme(useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light')}>
        <main className="w-full lg:border lg:border-slate-400 lg:py-10 lg:px-24 select-none lg:block" dir={locale == 'fa' ? 'rtl' : 'ltr'}>
          <Header />
          <div className={styles.TabContainer}>
            <Component {...pageProps} key={router.asPath} />
          </div>
          <NavBar />
        </main>
      </ThemeProvider>
    </IntlProvider>
  )
}

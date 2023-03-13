import 'styles/globals.sass'
import styles from 'styles/app.module.sass'

import type { AppProps } from 'next/app'
import { IntlProvider } from 'react-intl'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from '@mui/material/styles'
import { Container, useMediaQuery } from '@mui/material'

import Header from 'components/Header'
import NavBar from 'components/NavBar'

import GetMessages from 'util/messages'
import GetTheme from 'util/theme'
import { useState } from 'react'

export default function App({ Component, pageProps, router }: AppProps) {
  const [hidden, hide] = useState(false)

  const locale: string = String(router.locale)

  const theme = useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light'

  const direction = locale == 'fa' ? 'rtl' : 'ltr'

  return (
    <IntlProvider locale={locale} messages={GetMessages(locale)}>
      <ThemeProvider theme={GetTheme(theme, direction)}>
        <Container disableGutters className={styles.Main + (hidden ? ' opacity-0' : '')} dir={direction}>
          <Header hide={() => hide(true)} />
          <Container disableGutters className={styles.Page}>
            <AnimatePresence mode="wait" initial={false}>
              <Component {...pageProps} key={router.asPath} />
            </AnimatePresence>
          </Container>
          <NavBar />
        </Container>
      </ThemeProvider>
    </IntlProvider>
  )
}

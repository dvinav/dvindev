import 'styles/globals.css'
import type { AppProps } from 'next/app'
import Header from 'components/Header'
import { useRouter } from 'next/router'
import { FormattedMessage, IntlProvider } from 'react-intl'
import fa from 'locales/fa.json'
import en from 'locales/en.json'
import Link from 'next/link'

const messages = {
  fa,
  en
}

const App = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter()
  return (
    <IntlProvider
      locale={locale as string}
      messages={messages[locale as keyof typeof messages]}
    >
      <main
        className="w-full border border-slate-400 py-10 px-28 select-none"
        style={{ height: 'calc(100vh - 5rem)' }}
        dir={locale == 'fa' ? 'rtl' : 'ltr'}
      >
        <Header />
        <Component {...pageProps} />
      </main>
      <div className="w-full mt-1.5 flex justify-end">
        <Link
          href={useRouter().asPath}
          locale={locale == 'fa' ? 'en' : 'fa'}
          className="transition-colors dark:text-slate-400 text-slate-500 dark:hover:text-slate-200 hover:text-slate-700"
        >
          <FormattedMessage id="lang" />
        </Link>
      </div>
    </IntlProvider>
  )
}

export default App

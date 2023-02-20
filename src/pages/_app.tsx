import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '@/components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className="w-full border border-slate-200 p-10"
      style={{ height: 'calc(100vh - 5rem)' }}
    >
      <Header />
      <Component {...pageProps} />
    </main>
  )
}

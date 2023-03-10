import { Montserrat as MS } from '@next/font/google'
import localFont from '@next/font/local'

export const Montserrat = MS({
  weight: ['400', '700'],
  subsets: ['latin']
})

export const Yekan = localFont({ src: '../public/fonts/Yekan.woff2' })

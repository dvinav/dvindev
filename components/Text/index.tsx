import { useRouter } from 'next/router'
import { Montserrat, Yekan } from 'util/fonts'

const TextSize = {
  p: 'rtl:lg:text-2xl rtl:font-thin text-sm lg:text-lg text-justify',
  h1: 'rtl:font-thin lg:text-5xl text-2xl',
  h2: 'rtl:font-thin lg:text-3xl text-xl'
}

type Props = {
  children: React.ReactNode
  type: keyof typeof TextSize
  className?: string
}

export default function Text({ children, type, className }: Props) {
  const { locale } = useRouter()

  return (
    <p
      className={`${className} ${locale == 'fa' ? Yekan.className : Montserrat.className} traffic text-slate-700 dark:text-slate-200 + ${
        TextSize[type]
      }`}
    >
      {children}
    </p>
  )
}

import { FormattedMessage } from 'react-intl'
import { Montserrat, Yekan } from 'util/fonts'
import { useRouter } from 'next/router'

export default function Title() {
  const { locale } = useRouter()
  return (
    <div className="h-full flex-1 uppercase flex items-center">
      <h1
        className={`${
          locale == 'fa' ? Yekan.className : Montserrat.className
        } uppercase font-bold ltr:tracking-widest dark:text-slate-100 text-slate-700`}
      >
        <FormattedMessage id="header.title" />
      </h1>
    </div>
  )
}

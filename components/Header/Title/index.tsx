import { FormattedMessage } from 'react-intl'

const Title = () => {
  return (
    <div className="h-full flex-1 uppercase flex items-center">
      <h1 className="uppercase font-bold ltr:tracking-widest dark:text-slate-100 text-slate-700">
        <FormattedMessage id="header.title" />
      </h1>
    </div>
  )
}

export default Title

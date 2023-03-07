import { MenuItem } from '@mui/material'
import Link from 'next/link'
import { FormattedMessage } from 'react-intl'

type Props = {
  url: string
  locale: string
}

export default function Item({ url, locale }: Props) {
  return (
    <MenuItem onClick={close}>
      <Link href={url} locale={locale}>
        <FormattedMessage id={`lang.${locale}`} />
      </Link>
    </MenuItem>
  )
}

import { MenuItem } from '@mui/material'
import { useRouter } from 'next/router'
import { FormattedMessage } from 'react-intl'

type Props = {
  locale: string
  asPath: string
  hide: () => void
}

export default function Item({ locale, asPath, hide }: Props) {
  const router = useRouter()
  console.log(typeof hide, hide) // outputs undefined

  return (
    <MenuItem
      onClick={() => {
        setTimeout(() => router.push(asPath, asPath, { locale }), 300)
      }}
    >
      <FormattedMessage id={`lang.${locale}`} />
    </MenuItem>
  )
}

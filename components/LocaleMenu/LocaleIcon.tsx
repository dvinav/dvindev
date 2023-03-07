import { Icon } from '@mui/material'

type Props = {
  open: React.MouseEventHandler<HTMLSpanElement>
}

export default function LocaleIcon({ open }: Props) {
  return (
    <Icon
      className="transition-colors rtl:mt-0.5 dark:hover:text-slate-200 hover:text-slate-700 text-slate-400"
      onClick={open}
    >
      languagerounded
    </Icon>
  )
}

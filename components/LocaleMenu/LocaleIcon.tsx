import { LanguageOutlined } from '@mui/icons-material'

type Props = {
  open: React.MouseEventHandler<SVGElement>
}

export default function LocaleIcon({ open }: Props) {
  return <LanguageOutlined className="transition-colors rtl:mt-0.5 dark:hover:text-slate-200 hover:text-slate-700 text-slate-400" onClick={open} />
}

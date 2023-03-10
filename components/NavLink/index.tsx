import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormattedMessage } from 'react-intl'
import styles from 'styles/navLink.module.sass'

type Props = {
  children: React.ReactNode
}

export default function NavLink({ children }: Props) {
  const { asPath } = useRouter()

  let isActive = asPath.substring(1) == children

  let activeLinkClasses = isActive
    ? 'dark:text-slate-200 pointer-events-none text-slate-700 ' + styles.NavLinkActive
    : 'dark:hover:text-slate-200 hover:text-slate-700 text-slate-400 '

  return (
    <li className={styles.NavLink + ' float-left transition-colors ' + activeLinkClasses}>
      <Link href={`/${children}`}>
        <FormattedMessage id={String(children)} />
      </Link>
    </li>
  )
}

import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormattedMessage } from 'react-intl'
import styles from 'styles/NavLink.module.css'

const NavLink = (props: { children?: React.ReactNode }) => {
  const { asPath } = useRouter()
  let isActive = asPath.substring(1) == props.children

  let activeLinkClasses = isActive
    ? ' dark:text-slate-200 pointer-events-none text-slate-700'
    : ' dark:text-slate-400 dark:hover:text-slate-200 hover:text-slate-700 text-slate-500'

  return (
    <li className={'float-left transition-colors' + activeLinkClasses}>
      <Link
        href={`/${props.children}`}
        className={isActive ? styles.NavLinkBorderActive : styles.NavLinkBorder}
      >
        <FormattedMessage id={String(props.children)} />
      </Link>
    </li>
  )
}

export default NavLink

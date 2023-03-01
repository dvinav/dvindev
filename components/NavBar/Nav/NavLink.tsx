import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormattedMessage } from 'react-intl'
import styles from 'styles/NavBarLink.module.css'

const NavLink = (props: { children: React.ReactNode }) => {
  const { asPath } = useRouter()

  let isActive = asPath.substring(1) == props.children

  let activeLinkClasses = isActive
    ? 'dark:text-slate-200 pointer-events-none text-slate-700 font-bold ltr:tracking-widest	' +
      styles.ActiveLink
    : 'dark:text-slate-500 text-slate-500 '

  return (
    <li className={styles.NavLink + ' float-left ' + activeLinkClasses}>
      <Link href={`/${props.children}`}>
        <FormattedMessage id={String(props.children)} />
      </Link>
    </li>
  )
}

export default NavLink

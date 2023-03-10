import styles from 'styles/navbar.module.sass'

import { useRouter } from 'next/router'

import { Montserrat, Yekan } from 'util/fonts'

import NavLink from 'components/NavLink'
import SocialIcons from 'components/SocialIcons'

const NavBar = () => {
  const { locale } = useRouter()
  return (
    <div className={`${styles.NavBar} rtl:text-lg ltr:tracking-wider ${locale == 'fa' ? Yekan.className : Montserrat.className}`}>
      <ul className={`${styles.Nav} rtl:gap-x-8`}>
        <NavLink>home</NavLink>
        <NavLink>about</NavLink>
        <NavLink>contact</NavLink>
      </ul>
      <SocialIcons />
    </div>
  )
}

export default NavBar

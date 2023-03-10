import styles from 'styles/header.module.sass'

import { useRouter } from 'next/router'

import { Montserrat, Yekan } from 'util/fonts'

import LocaleMenu from 'components/LocaleMenu'
import SocialIcons from 'components/SocialIcons'

import Title from './Title'
import Nav from './Nav'

export default function Header() {
  const { locale } = useRouter()

  return (
    <header className={`${styles.Header} rtl:text-xl ltr:tracking-wider ${locale == 'fa' ? Yekan.className : Montserrat.className}`}>
      <div className={styles.Title}>
        <Title />
        <div className="hidden lg:block">
          <SocialIcons />
        </div>
      </div>
      <div className={styles.Nav}>
        <Nav />
      </div>
      <div className={styles.LocaleMenu}>
        <LocaleMenu />
      </div>
    </header>
  )
}

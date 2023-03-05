import Mobile from './Mobile'
import Desktop from './Desktop'

const Header = () => {
  return (
    <header className="h-14 flex text-base rtl:text-lg ltr:tracking-wider px-10 mt-4">
      <Mobile />
      <Desktop />
    </header>
  )
}

export default Header

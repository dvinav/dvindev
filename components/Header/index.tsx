import Nav from './Nav'
import Title from './Title'

const Header = () => {
  return (
    <header className="h-14 lg:flex text-base rtl:text-lg ltr:tracking-wider hidden">
      <div className="flex-1">
        <Title />
      </div>
      <div className="flex-1 flex items-center justify-items-end">
        <Nav />
      </div>
    </header>
  )
}

export default Header

import Nav from './Nav'
import Title from './Title'

const Header = () => {
  return (
    <header className="h-14 flex font-medium ltr:tracking-wider">
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

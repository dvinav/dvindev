import Nav from './Nav'

const NavBar = () => {
  return (
    <div className="text-sm h-28 rtl:text-lg ltr:tracking-wider w-full flex items-center lg:hidden fixed bottom-0">
      <Nav />
    </div>
  )
}

export default NavBar

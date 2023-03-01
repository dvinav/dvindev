import NavLink from './NavLink'

const Nav = () => {
  return (
    <ul className="h-28 flex uppercase items-center w-full flex flex-1 basis-full gap-x-6 rtl:gap-x-8 justify-center">
      <NavLink>home</NavLink>
      <NavLink>skills</NavLink>
      <NavLink>contact</NavLink>
      <NavLink>about</NavLink>
    </ul>
  )
}

export default Nav

import NavLink from 'components/NavLink'
import LocaleMenu from 'components/LocaleMenu'

export default function Nav() {
  return (
    <div className="h-full flex-1 uppercase flex items-center">
      <div className="basis-full"></div>
      <ul className="basis-auto w-full flex gap-x-20">
        <NavLink>home</NavLink>
        <NavLink>about</NavLink>
        <NavLink>contact</NavLink>
        <LocaleMenu />
      </ul>
    </div>
  )
}

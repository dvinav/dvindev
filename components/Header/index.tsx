import Title from './Title'
import LocaleMenu from 'components/LocaleMenu'
import Nav from './Nav'

export default function Header() {
  return (
    <header className="h-14 flex text-base rtl:text-xl ltr:tracking-wider px-10 lg:p-0 my-4">
      <div className="flex-1 basis-full lg:block">
        <Title />
      </div>
      <div className="flex-1 flex items-center justify-items-end hidden lg:block">
        <Nav />
      </div>
      <div className="flex-1 flex items-center justify-items-end lg:hidden">
        <LocaleMenu />
      </div>
    </header>
  )
}

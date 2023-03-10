import { useState } from 'react'
import { useRouter } from 'next/router'
import Menu from './Menu'
import LocaleIcon from './LocaleIcon'
import Item from './Item'

export default function LocaleMenu() {
  const [anchorEl, setAnchorEl] = useState<null | SVGElement>(null)
  const open = Boolean(anchorEl)
  const close = () => setAnchorEl(null)
  const { asPath } = useRouter()
  return (
    <>
      <LocaleIcon open={(e) => setAnchorEl(e.currentTarget)} />
      <Menu id="languageMenu" anchorEl={anchorEl} open={open} onClose={close}>
        <Item url={asPath} locale="en" />
        <Item url={asPath} locale="fa" />
      </Menu>
    </>
  )
}

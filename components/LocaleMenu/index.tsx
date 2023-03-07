import { MenuItem } from '@mui/material'
import { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Menu from './Menu'
import LocaleIcon from './LocaleIcon'
import Item from './Item'

export default function LocaleMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
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

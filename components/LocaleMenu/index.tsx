import { useState } from 'react'
import { useRouter } from 'next/router'
import Menu from './Menu'
import LocaleIcon from './LocaleIcon'
import Item from './Item'

type Props = {
  hide: () => void
}

export default function LocaleMenu({ hide }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | SVGElement>(null)

  const open = Boolean(anchorEl)

  const close = () => setAnchorEl(null)

  const { asPath } = useRouter()

  const IProps = { asPath, hide }

  return (
    <>
      <LocaleIcon open={(e) => setAnchorEl(e.currentTarget)} />
      <Menu id="languageMenu" anchorEl={anchorEl} open={open} onClose={close}>
        <Item {...IProps} locale="en" />
        <Item {...IProps} locale="fa" />
      </Menu>
    </>
  )
}

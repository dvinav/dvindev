import { Icon, Menu, MenuItem } from '@mui/material'
import { styled, alpha } from '@mui/material/styles'
import { MenuProps } from '@mui/material/Menu'
import { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { useRouter } from 'next/router'
import Link from 'next/link'

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right'
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(2),
    minWidth: 100
  }
}))

const LocaleMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Icon
        className="transition-colors dark:text-slate-400 dark:hover:text-slate-200 hover:text-slate-700 text-slate-500"
        onClick={handleClick}
      >
        languagerounded
      </Icon>
      <StyledMenu
        id="languageMenu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link href={useRouter().route} locale="en">
            <FormattedMessage id="lang.EN" />
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={useRouter().route} locale="fa">
            <FormattedMessage id="lang.FA" />
          </Link>
        </MenuItem>
      </StyledMenu>
    </>
  )
}

export default LocaleMenu

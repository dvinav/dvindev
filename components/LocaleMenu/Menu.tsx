import { Menu } from '@mui/material'
import { styled } from '@mui/material/styles'
import { MenuProps } from '@mui/material/Menu'

export default styled((props: MenuProps) => (
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

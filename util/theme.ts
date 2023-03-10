import { createTheme } from '@mui/material/styles'
import { blueGrey } from '@mui/material/colors'

export default function GetTheme(mode: 'dark' | 'light', direction: 'rtl' | 'ltr') {
  return createTheme({
    palette: {
      mode: mode,
      primary: {
        main: mode == 'dark' ? blueGrey[50] : blueGrey[900]
      }
    },
    direction
  })
}

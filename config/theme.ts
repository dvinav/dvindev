import { createTheme } from '@mui/material/styles'

export default function GetTheme(mode: 'dark' | 'light') {
  return createTheme({
    palette: {
      mode: mode
    }
  })
}

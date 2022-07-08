import React from 'react'
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import { topTheme, theme } from '@/theme'
import jaJson from '@/locales/ja.json'
import { Footer } from '@/components/organisms/Footer'

const App = ({ children }) => {
  let customTheme
  if (children.key === '/') {
    customTheme = topTheme
  } else {
    customTheme = theme
  }
  return (
    <MuiThemeProvider theme={customTheme}>
      <CssBaseline />
      <main>{children}</main>
      <Footer />
    </MuiThemeProvider>
  )
}

export const wrapPageElement = ({ element, props }) => <App>{element}</App>

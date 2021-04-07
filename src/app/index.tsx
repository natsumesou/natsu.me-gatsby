import React from 'react'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { theme } from '@/theme'
import { Header } from '@/components/organisms/Header'

const App = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  )
}

export const wrapPageElement = ({ element, props }) => <App>{element}</App>

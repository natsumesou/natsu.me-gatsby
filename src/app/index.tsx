import React from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { topTheme, theme } from '@/theme'
import { Footer } from '@/components/organisms/Footer'

const App = ({ children }) => {
  let customTheme
  if (children.key === '/') {
    customTheme = topTheme
  } else {
    customTheme = theme
  }
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

export const wrapPageElement = ({ element, props }) => <App>{element}</App>

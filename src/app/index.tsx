import React from 'react'
import { CssBaseline, MuiThemeProvider, ThemeProvider } from '@material-ui/core'
import { theme } from '@/theme'
import { Header } from '@/components/organisms/Header'
import jaJson from '@/locales/ja.json';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

i18n.use(initReactI18next).init({
  resources: {
    ja: { translation: jaJson },
  },
  lng: 'ja',
  fallbackLng: 'ja',
  returnEmptyString: false,
})

const App = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>{children}</main>
    </MuiThemeProvider>
  )
}

export const wrapPageElement = ({ element, props }) => <App>{element}</App>

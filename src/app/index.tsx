import React from 'react'
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import { theme } from '@/theme'
import { Header } from '@/components/organisms/Header'
import jaJson from '@/locales/ja.json';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import { Footer } from '@/components/organisms/Footer';

i18n.use(initReactI18next).init({
  resources: {
    ja: { translation: jaJson },
  },
  lng: 'ja',
  fallbackLng: 'ja',
  returnEmptyString: false,
  react: {
    bindI18n: 'loaded',
    bindI18nStore: 'added'
  }
})

const App = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>{children}</main>
      <Footer />
    </MuiThemeProvider>
  )
}

export const wrapPageElement = ({ element, props }) => <App>{element}</App>

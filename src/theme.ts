import { createMuiTheme, Theme } from '@material-ui/core/styles'
import { Shadows } from '@material-ui/core/styles/shadows'

const createTheme = (baseTheme: Theme) => {
  return createMuiTheme({
    palette: baseTheme.palette,
    breakpoints: baseTheme.breakpoints,
    typography: {
      fontFamily: '"Noto Sans JP", sans-serif',
      h1: {
        fontSize: '4rem',
        fontWeight: 'bold',
        color: baseTheme.palette.text.primary,
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: baseTheme.palette.text.primary,
      },
      h3: {
        fontSize: '1.6rem',
        fontWeight: 'bold',
        color: baseTheme.palette.text.primary,
      },
      h4: {
        fontSize: '1.4rem',
        fontWeight: 'bold',
        color: baseTheme.palette.text.primary,
      },
      h5: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: baseTheme.palette.text.primary,
      },
      h6: {
        fontSize: '1rem',
        fontWeight: 'bold',
        color: baseTheme.palette.text.primary,
      },
      body1: {
        letterSpacing: 0,
        fontSize: '1.6rem',
        color: baseTheme.palette.text.primary,
      },
      body2: {
        fontSize: '1.4rem',
        lineHeight: '1.8rem',
        color: baseTheme.palette.text.secondary,
      },
      button: {
        textTransform: 'none',
        fontSize: '1.2rem',
      },
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '*': {
            boxSizing: 'border-box',
          },
          html: {
            minHeight: '100%',
            fontSize: '12px',
          },
        },
      },
      MuiButton: {
        sizeLarge: {
          '& $label': {
            fontSize: '1.6rem',
          },
        },
      },
      MuiFab: {
        sizeMedium: {
          '& $label': {
            fontSize: '1.6rem',
          },
        },
      },
    },
    shadows: Array(25).fill('none') as Shadows,
  })
}

export const topTheme = createTheme(
  createMuiTheme({
    palette: {
      primary: {
        main: '#000000',
        dark: '#078085',
        contrastText: '#000000',
      },
      error: {
        main: '#f44336',
      },
      background: {
        default: '#000000',
      },
      text: {
        primary: 'rgba(255,255,255,1)',
        secondary: 'rgba(215,215,215,1)',
        disabled: 'rgba(150,150,150,1)',
      },
    },
  })
)

export const theme = createTheme(
  createMuiTheme({
    palette: {
      primary: {
        main: '#ffffff',
        dark: '#078085',
        contrastText: '#ffffff',
      },
      error: {
        main: '#f44336',
      },
      background: {
        default: '#ffffff',
      },
      text: {
        primary: 'rgba(0,0,0,0.87)',
        secondary: 'rgba(0,0,0,0.54)',
        disabled: 'rgba(0,0,0,0.26)',
      },
    },
  })
)

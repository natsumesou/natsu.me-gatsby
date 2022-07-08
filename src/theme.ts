import { createTheme } from '@mui/material/styles'
import { Shadows } from '@mui/material/styles/shadows'
import { Theme } from '@mui/material'

const breakpoints = {
  values: {
    xs: 400,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
}

const createCustomTheme = (baseTheme: Theme) => {
  return createTheme({
    palette: baseTheme.palette,
    typography: {
      fontFamily: '"Noto Sans JP", sans-serif',
      h1: {
        fontSize: '4rem',
        fontWeight: 'bold',
        color: baseTheme.palette.text.primary,
        [baseTheme.breakpoints.down('md')]: {
          fontSize: '2rem',
        },
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: baseTheme.palette.text.primary,
        [baseTheme.breakpoints.down('md')]: {
          fontSize: '1rem',
        },
      },
      h3: {
        fontSize: '1.6rem',
        fontWeight: 'bold',
        color: baseTheme.palette.text.primary,
        [baseTheme.breakpoints.down('md')]: {
          fontSize: '0.8rem',
        },
      },
      h4: {
        fontSize: '1.4rem',
        fontWeight: 'bold',
        color: baseTheme.palette.text.primary,
        [baseTheme.breakpoints.down('md')]: {
          fontSize: '0.7rem',
        },
      },
      h5: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: baseTheme.palette.text.primary,
        [baseTheme.breakpoints.down('md')]: {
          fontSize: '0.6rem',
        },
      },
      h6: {
        fontSize: '1rem',
        fontWeight: 'bold',
        color: baseTheme.palette.text.primary,
        [baseTheme.breakpoints.down('md')]: {
          fontSize: '0.5rem',
        },
      },
      body1: {
        letterSpacing: 0,
        fontSize: '1.6rem',
        color: baseTheme.palette.text.primary,
        [baseTheme.breakpoints.down('md')]: {
          fontSize: '0.8rem',
        },
      },
      body2: {
        fontSize: '1.4rem',
        lineHeight: '1.8rem',
        color: baseTheme.palette.text.secondary,
        [baseTheme.breakpoints.down('md')]: {
          fontSize: '0.7rem',
          lineHeight: '0.9rem',
        },
      },
      button: {
        textTransform: 'none',
        fontSize: '1.2rem',
        [baseTheme.breakpoints.down('md')]: {
          fontSize: '1rem',
        },
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
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
      },
      MuiButton: {
        styleOverrides: {
          sizeLarge: {
            fontSize: '1.4rem',
          },
        },
      },
      MuiFab: {
        styleOverrides: {
          sizeMedium: {
            fontSize: '1rem',
          },
        },
      },
    },
    shadows: Array(25).fill('none') as Shadows,
  })
}

export const topTheme = createCustomTheme(
  createTheme({
    breakpoints: breakpoints,
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

export const theme = createCustomTheme(
  createTheme({
    breakpoints: breakpoints,
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

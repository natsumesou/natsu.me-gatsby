import {
  AppBar,
  Toolbar,
  makeStyles,
  createStyles,
  Box,
  Theme,
  useMediaQuery,
} from '@material-ui/core'
import React from 'react'
import { TitleButton } from '../atoms/TitleButton'
import { CompanyButton } from '../atoms/CompanyButton'
import { BusinessButton } from '../atoms/BusinessButton'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      margin: '0 10vw',
      [theme.breakpoints.down('sm')]: {
        margin: '0',
      },
    },
    title: {
      flexGrow: 1,
      justifyContent: 'flex-start',
    },
    sub: {
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
    },
  })
)

export const Header = () => {
  const classes = useStyles()

  const isSM = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  const isXS = useMediaQuery((theme: Theme) => theme.breakpoints.down('xs'))
  const buttonProps = {
    size: isXS ? 'medium' : 'large',
  }

  return (
    <header>
      <AppBar position="sticky">
        <Toolbar variant="regular" className={classes.toolbar}>
          <Box className={classes.title}>
            <TitleButton className={classes.title} {...buttonProps} />
          </Box>
          <CompanyButton onlyIcon={isXS} {...buttonProps} />
          <BusinessButton onlyIcon={isXS} {...buttonProps} />
        </Toolbar>
      </AppBar>
    </header>
  )
}

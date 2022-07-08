import { Box, createStyles, makeStyles, Theme } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      margin: '2em auto',
      width: '50%',
      maxWidth: '700px',
      [theme.breakpoints.down('sm')]: {
        width: '70%',
      },
      [theme.breakpoints.down('xs')]: {
        width: '95%',
      },
    },
  })
)

export const Content = ({ children }) => {
  const classes = useStyles()

  return <Box className={classes.box}>{children}</Box>
}

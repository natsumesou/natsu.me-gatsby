import { Box, createStyles, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(
  createStyles({
    footer: {
      margin: '30px auto 20px',
      textAlign: 'center',
    },
  })
)

export const Footer = () => {
  const classes = useStyles()

  return (
    <footer>
      <Box className={classes.footer} color="secondary">
        copyright © vonxai inc. All Rights Reserved.
      </Box>
    </footer>
  )
}

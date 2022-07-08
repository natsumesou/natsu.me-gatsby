import { Box, createStyles, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(
  createStyles({
    box: {
      margin: '1rem 0',
    },
    subtitle: {
      fontWeight: 'bold',
    },
  })
)

export const Title = () => {
  const classes = useStyles()

  return (
    <Box className={classes.box}>
      <Typography className={classes.subtitle}>世界を加速させる。</Typography>
      <Typography variant="h1">vonxai inc.</Typography>
    </Box>
  )
}

import { makeStyles, Theme, Typography, createStyles } from '@material-ui/core'
import React from 'react'
import Base from './Base'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      textAlign: 'center',
    },
  })
)

const NotFound = () => {
  const classes = useStyles()

  return (
    <Base>
      <Typography className={classes.text} variant="h2">
        404 Not Found
      </Typography>
    </Base>
  )
}

export default NotFound

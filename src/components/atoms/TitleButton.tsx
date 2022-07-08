import {
  Button,
  Typography,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
      },
    },
  })
)

export const TitleButton = (props) => {
  const classes = useStyles()

  return (
    <Button href="/" {...props}>
      <Typography variant="h1" className={classes.title}>
        vonxai inc.
      </Typography>
    </Button>
  )
}

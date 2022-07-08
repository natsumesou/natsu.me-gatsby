import {
  Box,
  Typography,
  makeStyles,
  createStyles,
  Theme,
  Grid,
} from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      margin: '1em -8px',
      flexDirection: 'column',
    },
    griditem: {
      display: 'flex',
      borderBottom: '1px solid #e6e6e6',
      alignItems: 'center',
    },
    dt: {
      flex: 1,
    },
    dd: {
      flex: 2,
    },
  })
)

export const About = () => {
  const classes = useStyles()

  return (
    <Grid container component="dl" spacing={2} className={classes.grid}>
      <Grid item className={classes.griditem}>
        <Typography component="dt" variant="body1" className={classes.dt}>
          社名
        </Typography>
        <Typography component="dd" variant="body1" className={classes.dd}>
          vonxai合同会社
        </Typography>
      </Grid>
      <Grid item className={classes.griditem}>
        <Typography component="dt" variant="body1" className={classes.dt}>
          本社所在地
        </Typography>
        <Typography component="dd" variant="body1" className={classes.dd}>
          東京都渋谷区
        </Typography>
      </Grid>
      <Grid item className={classes.griditem}>
        <Typography component="dt" variant="body1" className={classes.dt}>
          最高経営責任者
        </Typography>
        <Typography component="dd" variant="body1" className={classes.dd}>
          夏目佳明
        </Typography>
      </Grid>
      <Grid item className={classes.griditem}>
        <Typography component="dt" variant="body1" className={classes.dt}>
          設立
        </Typography>
        <Typography component="dd" variant="body1" className={classes.dd}>
          2022年07月01日
        </Typography>
      </Grid>
      <Grid item className={classes.griditem}>
        <Typography component="dt" variant="body1" className={classes.dt}>
          資本金
        </Typography>
        <Typography component="dd" variant="body1" className={classes.dd}>
          1百万円
        </Typography>
      </Grid>
    </Grid>
  )
}

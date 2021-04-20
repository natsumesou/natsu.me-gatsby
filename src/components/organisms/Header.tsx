import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const style: React.CSSProperties = {
  width: '100%',
  height: 'calc(100vw/3)',
};

export const Header = (classes) => {
  return (
    <header>
    <AppBar position="sticky">
      <Toolbar variant="regular">
      <Typography variant="h1" className={classes.title}>
        Yoshiaki Natsume
      </Typography>
      </Toolbar>
    </AppBar>
    <StaticImage src="../../images/header.webp" alt="header image" objectFit={ 'cover' } style={ style } />
    </header>
  )
}

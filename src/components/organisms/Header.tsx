import { AppBar, Toolbar } from '@material-ui/core'
import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { TitleButton } from "../atoms/TitleButton"

const style: React.CSSProperties = {
  width: '100%',
  height: 'calc(100vw/3)',
};

export const Header = () => {
  return (
    <header>
    <AppBar position="sticky">
      <Toolbar variant="regular">
        <TitleButton />
      </Toolbar>
    </AppBar>
    <StaticImage src="../../images/header.webp" alt="header image" objectFit={ 'cover' } style={ style } />
    </header>
  )
}

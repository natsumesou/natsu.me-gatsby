import { Button, Typography, styled } from '@mui/material'
import React from 'react'

export const TitleButton = (props) => {
  return (
    <Button href="/" {...props}>
      <Typography variant="h1">vonxai inc.</Typography>
    </Button>
  )
}

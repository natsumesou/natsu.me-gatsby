import { Typography, styled } from '@mui/material'
import React from 'react'
import Base from './Base'

const STyledTypography = styled(Typography)({
  textAlign: 'center',
})

const NotFound = () => {
  return (
    <Base>
      <Typography variant="h2">404 Not Found</Typography>
    </Base>
  )
}

export default NotFound

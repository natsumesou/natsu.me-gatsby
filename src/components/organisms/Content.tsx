import { Box, styled } from '@mui/material'
import React from 'react'

const StyledBox = styled(Box)(({ theme }) => ({
  margin: '2em auto',
  width: '50%',
  maxWidth: '700px',
  [theme.breakpoints.down('lg')]: {
    width: '70%',
  },
  [theme.breakpoints.down('sm')]: {
    width: '95%',
  },
}))

export const Content = ({ children }) => {
  return <StyledBox>{children}</StyledBox>
}

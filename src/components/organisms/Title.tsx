import { Box, styled, Typography } from '@mui/material'
import React from 'react'

const StyledBox = styled(Box)({
  margin: '1rem 0',
})

const StyledSubTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '1.5rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.2rem',
  },
}))

const StyledTitleTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: '3rem',
  },
}))

export const Title = () => {
  return (
    <StyledBox>
      <StyledSubTypography variant="body1">
        世界を加速させる。
      </StyledSubTypography>
      <StyledTitleTypography variant="h1">vonxai inc.</StyledTitleTypography>
    </StyledBox>
  )
}

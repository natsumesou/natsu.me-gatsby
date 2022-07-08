import { Box, styled, Typography } from '@mui/material'
import React from 'react'

const StyledBox = styled(Box)({
  margin: '1rem 0',
})

const StyledTypography = styled(Typography)({
  fontWeight: 'bold',
})

export const Title = () => {
  return (
    <StyledBox>
      <StyledTypography>世界を加速させる。</StyledTypography>
      <Typography variant="h1">vonxai inc.</Typography>
    </StyledBox>
  )
}

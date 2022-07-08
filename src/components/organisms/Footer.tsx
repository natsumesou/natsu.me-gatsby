import { Box, Typography, styled } from '@mui/material'
import React from 'react'

const StyledBox = styled(Box)({
  margin: '30px auto 20px',
  textAlign: 'center',
})

const StyledTypography = styled(Typography)({
  fontSize: '1rem',
})

export const Footer = () => {
  return (
    <footer>
      <StyledBox color="secondary">
        <StyledTypography variant="body2">
          copyright © vonxai inc. All Rights Reserved.
        </StyledTypography>
      </StyledBox>
    </footer>
  )
}

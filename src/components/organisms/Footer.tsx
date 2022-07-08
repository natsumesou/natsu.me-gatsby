import { Box, styled } from '@mui/material'
import React from 'react'

const StyledBox = styled(Box)({
  margin: '30px auto 20px',
  textAlign: 'center',
})

export const Footer = () => {
  return (
    <footer>
      <StyledBox color="secondary">
        copyright © vonxai inc. All Rights Reserved.
      </StyledBox>
    </footer>
  )
}

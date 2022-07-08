import MailOutlineIcon from '@mui/icons-material/MailOutline'
import { Fab, styled } from '@mui/material'
import React from 'react'

const StyledFab = styled(Fab)(({ theme }) => ({
  margin: 0,
  top: 'auto',
  right: 10,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
  '&:hover': {
    backgroundColor: theme.palette.text.secondary,
  },
}))

const StyledMailOutlineIcon = styled(MailOutlineIcon)(({ theme }) => ({
  marginRight: theme.spacing(0.5),
}))

export const ContactFloatButton = () => {
  return (
    <StyledFab variant="extended" size="medium" href="/contact">
      <StyledMailOutlineIcon />
      お問い合わせ
    </StyledFab>
  )
}

import { Button, styled } from '@mui/material'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import React from 'react'

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
}))

export const MailButton = (props) => {
  return (
    <StyledButton
      size="large"
      startIcon={<MailOutlineIcon />}
      href="mailto:contact@vonxai.co.jp?subject=問い合わせ&amp;body=企業/団体名：%0D%0A氏名：%0D%0A件名：%0D%0A内容："
      {...props}
    >
      お問い合わせメール
    </StyledButton>
  )
}

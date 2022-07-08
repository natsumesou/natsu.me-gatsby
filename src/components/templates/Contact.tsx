import { List, ListItem, styled, Typography } from '@mui/material'
import React from 'react'
import { MailButton } from '../atoms/MailButton'
import Base from './Base'

const StyledTypography = styled(Typography)(({ theme }) => ({
  margin: '2rem 0 0',
  [theme.breakpoints.down('md')]: {
    margin: '1rem 0 0',
  },
}))

const StyledList = styled(List)({
  listStyle: 'disc',
  marginLeft: '20px',
})

const StyledListItem = styled(ListItem)({
  display: 'list-item',
  paddingLeft: 0,
  padding: 0,
})

const Contact = ({ pageContext }) => {
  return (
    <Base pageContext={pageContext}>
      <Typography variant="h2">お問い合わせ</Typography>
      <Typography variant="body1">
        お問い合わせは以下にメールをお願い致します。
      </Typography>
      <MailButton />
      <StyledTypography variant="body1">
        上記リンクが開かない場合はお手数ですが contact@vonxai.co.jp 宛に
        <StyledList>
          <StyledListItem>企業/団体名</StyledListItem>
          <StyledListItem>氏名</StyledListItem>
          <StyledListItem>件名</StyledListItem>
          <StyledListItem>内容</StyledListItem>
        </StyledList>
        を添えてメールをお送りください。
      </StyledTypography>
    </Base>
  )
}

export default Contact

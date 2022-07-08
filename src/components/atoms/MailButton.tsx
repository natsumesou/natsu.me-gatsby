import { Button } from '@material-ui/core'
import Mail from '@material-ui/icons/Mail'
import React from 'react'

export const MailButton = (props) => {
  return (
    <Button
      size="large"
      startIcon={<Mail />}
      href="mailto:contact@vonxai.co.jp?subject=問い合わせ&amp;body=企業/団体名：%0D%0A氏名：%0D%0A件名：%0D%0A内容："
      {...props}
    >
      問い合わせメール
    </Button>
  )
}

import {
  List,
  ListItem,
  makeStyles,
  createStyles,
  Typography,
} from '@material-ui/core'
import React from 'react'
import { classicNameResolver } from 'typescript'
import { MailButton } from '../atoms/MailButton'
import Base from './Base'

const useStyles = makeStyles(
  createStyles({
    announce: {
      margin: '2rem 0 0',
    },
    ul: {
      listStyle: 'disc',
      marginLeft: '20px',
    },
    li: {
      display: 'list-item',
      paddingLeft: 0,
    },
  })
)

const Contact = ({ pageContext }) => {
  const classes = useStyles()

  return (
    <Base pageContext={pageContext}>
      <Typography variant="h2">お問い合わせ</Typography>
      <Typography variant="body2">
        お問い合わせは以下にメールをお願い致します。
      </Typography>
      <MailButton />
      <Typography variant="body2" className={classes.announce}>
        上記リンクが開かない場合はお手数ですが contact@vonxai.co.jp 宛に
        <List className={classes.ul}>
          <ListItem className={classes.li}>企業/団体名</ListItem>
          <ListItem className={classes.li}>氏名</ListItem>
          <ListItem className={classes.li}>件名</ListItem>
          <ListItem className={classes.li}>内容</ListItem>
        </List>
        を添えてメールをお送りください。
      </Typography>
    </Base>
  )
}

export default Contact

import { createStyles, Fab, makeStyles, Theme } from '@material-ui/core'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import React from 'react'
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      margin: 0,
      top: 'auto',
      right: 10,
      bottom: 20,
      left: 'auto',
      position: 'fixed',
    },
    icon: {
      marginRight: theme.spacing(0.5),
      fontSize: '1.6rem',
    }
  })
)

export const ContactFloatButton = () => {
  const classes = useStyles();
  const { t, ready } = useTranslation();
  let contact = 'contact'
  if (ready) {
    contact = t('contact')
  }

  return (
    <Fab variant="extended" size="medium" target="_blank" rel="noreferrer" className={classes.fab} href="https://docs.google.com/forms/d/e/1FAIpQLSfIp2atxPoEEl64C2EDqpKbG0IiJZChfu7Sj1OusTopPqKE7Q/viewform?usp=sf_link">
      <MailOutlineIcon className={classes.icon} />
      {contact}
    </Fab>
  )
}

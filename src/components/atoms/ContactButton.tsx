import { createStyles, Fab, makeStyles } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(
  createStyles({
    fab: {
      margin: 0,
      top: 'auto',
      right: 10,
      bottom: 20,
      left: 'auto',
      position: 'fixed',
    }
  })
)

export const ContactButton = () => {
  const [t] = useTranslation();
  const classes = useStyles();

  return (
    <Fab variant="extended" size="medium" target="_blank" rel="noreferrer" className={classes.fab} href="https://docs.google.com/forms/d/e/1FAIpQLSfIp2atxPoEEl64C2EDqpKbG0IiJZChfu7Sj1OusTopPqKE7Q/viewform?usp=sf_link">
      {t('contact')}
    </Fab>
  )
}

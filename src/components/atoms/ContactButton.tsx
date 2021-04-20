import { Button } from '@material-ui/core'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import React from 'react'
import { useTranslation } from 'react-i18next';

export const ContactButton = () => {
  const [t] = useTranslation();

  return (
    <Button size="large" startIcon={<MailOutlineIcon />} target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSfIp2atxPoEEl64C2EDqpKbG0IiJZChfu7Sj1OusTopPqKE7Q/viewform?usp=sf_link">
      {t('contact')}
    </Button>
  )
}

import { Link } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { MainBox } from '../molecules/MainBox'

export const Contact = () => {
  const [t] = useTranslation();

  return (
    <MainBox>
      <h2>お問い合わせ</h2>
      <Link component="button" variant="body2" href="https://docs.google.com/forms/d/e/1FAIpQLSfIp2atxPoEEl64C2EDqpKbG0IiJZChfu7Sj1OusTopPqKE7Q/viewform?usp=sf_link">{t('form')}</Link>
    </MainBox>
  )
}

import React from 'react'
import { useTranslation } from 'react-i18next';
import { ContactButton } from '../atoms/ContactButton';
import { MainBox } from '../molecules/MainBox'

export const Contact = () => {
  const { t, ready } = useTranslation();
  let description = ''
  if(ready) {
    description = t('contact.description')
  }

  return (
    <MainBox>
      <h2>Contact</h2>
      <p>{description}</p>
      <ContactButton />
    </MainBox>
  )
}

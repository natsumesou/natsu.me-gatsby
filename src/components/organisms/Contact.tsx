import React from 'react'
import { useTranslation } from 'react-i18next';
import { ContactButton } from '../atoms/ContactButton';
import { MainBox } from '../molecules/MainBox'

export const Contact = () => {
  const [t] = useTranslation();

  return (
    <MainBox>
      <h2>Contact</h2>
      <p>{t('contact.description')}</p>
      <ContactButton />
    </MainBox>
  )
}

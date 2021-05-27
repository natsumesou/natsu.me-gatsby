import React from 'react'
import { useTranslation } from 'react-i18next';
import { ContactButton } from '../atoms/ContactButton';
import { MainBox } from '../molecules/MainBox'

export const Partner = () => {
  const { t, ready } = useTranslation();
  let partner = ''
  let description = ''
  let list = ''
  if(ready) {
    partner = t('partner')
    description = t('partner.description')
    list = t('partner.list')
  }

  return (
    <MainBox>
      <h2 id="partner">{partner}</h2>
      <p>{description}</p>
      <p>{list}</p>
    </MainBox>
  )
}

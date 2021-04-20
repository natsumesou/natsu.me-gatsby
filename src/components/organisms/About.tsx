import React from 'react'
import { useTranslation } from 'react-i18next';
import { LinkedinLink } from '../atoms/LinkedInLink';
import { WantedlyLink } from '../atoms/WantedlyLink';
import { MainBox } from '../molecules/MainBox'

export const About = () => {
  const [t] = useTranslation();

  return (
    <MainBox>
    <h2>About</h2>
    <h3>{t('fullname')} {t('fullname.roman')}</h3>
    <p>
      {t('about.start')}
      <LinkedinLink />
      {t('about.or')}
      <WantedlyLink />
      {t('about.end')}
    </p>
    </MainBox>
  )
}

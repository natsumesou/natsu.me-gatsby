import React from 'react'
import { useTranslation } from 'react-i18next';
import { LinkedinLink } from '../atoms/LinkedInLink';
import { WantedlyLink } from '../atoms/WantedlyLink';
import { MainBox } from '../molecules/MainBox'

export const About = () => {
  const { t, ready } = useTranslation();
  let about
  if (ready === false) {
    about = ''
  } else {
    about = `${t('about.start')}
    <LinkedinLink />
    ${t('about.or')}
    <WantedlyLink />
    ${t('about.end')}
    `
  }

  return (
    <MainBox>
    <h2>About</h2>
    <h3>{t('fullname', {defaultValue: ''})} Yoshiaki Natsume</h3>
    <p>{about}</p>
    </MainBox>
  )
}

import React from 'react'
import { useTranslation } from 'react-i18next';
import { LinkedinLink } from '../atoms/LinkedInLink';
import { WantedlyLink } from '../atoms/WantedlyLink';
import { MainBox } from '../molecules/MainBox'

export const About = () => {
  const { t, ready } = useTranslation();
  let name = 'Yoshiaki Natsume', aboutStart = '', aboutOr = '', aboutEnd = ''
  if (ready) {
    name = `${t('fullname')} ` + name
    aboutStart = t('about.start')
    aboutOr = t('about.or')
    aboutEnd = t('about.end')
  }

  return (
    <MainBox>
    <h2>About</h2>
    <h3>{name}</h3>
    <p>
      {aboutStart}
      <LinkedinLink />
      {aboutOr}
      <WantedlyLink />
      {aboutEnd}
    </p>
    </MainBox>
  )
}

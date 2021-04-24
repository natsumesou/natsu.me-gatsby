import { Grid } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next';

export const SDGs = () => {
  const { t, ready } = useTranslation();
  let sdgs = 'SDGs', description = ''
  if (ready) {
    sdgs = t('sdgs')
    description = t('sdgs.description')
  }

  return (
    <Grid item sm={6}>
    <h3>{sdgs}</h3>
    <p>{description}</p>
    </Grid>
  )
}

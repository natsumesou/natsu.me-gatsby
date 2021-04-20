import { Grid } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next';

export const Consultant = () => {
  const { t, ready } = useTranslation();
  let consultant = 'Consultant', description = ''
  if (ready) {
    consultant = t('consultant')
    description = t('consultant.description')
  }

  return (
    <Grid item sm={6}>
    <h3>{consultant}</h3>
    <p>{description}</p>
    </Grid>
  )
}

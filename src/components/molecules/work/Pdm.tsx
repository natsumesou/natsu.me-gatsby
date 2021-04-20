import { Grid } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next';

export const Pdm = () => {
  const { t, ready } = useTranslation();
  let pdm = 'Product Management', description = ''
  if (ready) {
    pdm = t('pdm')
    description = t('pdm.description')
  }

  return (
    <Grid item sm={6}>
    <h3>{pdm}</h3>
    <p>{description}</p>
    </Grid>
  )
}

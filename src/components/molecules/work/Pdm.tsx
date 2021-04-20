import { Grid } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next';

export const Pdm = () => {
  const [t] = useTranslation();

  return (
    <Grid item sm={6}>
    <h3>{t('pdm')}</h3>
    <p>{t('pdm.description')}</p>
    </Grid>
  )
}

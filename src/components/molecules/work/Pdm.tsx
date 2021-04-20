import { Grid } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next';

export const Pdm = () => {
  const [t] = useTranslation();

  return (
    <Grid item sm={6}>
    <h3>{t('pdm', {defaultValue: 'Product Management'})}</h3>
    <p>{t('pdm.description', {defaultValue: ''})}</p>
    </Grid>
  )
}

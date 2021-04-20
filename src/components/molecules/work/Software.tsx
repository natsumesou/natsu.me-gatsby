import { Grid } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next';

export const Software = () => {
  const [t] = useTranslation();

  return (
    <Grid item sm={6}>
    <h3>{t('software')}</h3>
    <p>{t('software.description')}</p>
    </Grid>
  )
}
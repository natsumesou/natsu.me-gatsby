import { Grid } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next';

export const Consultant = () => {
  const [t] = useTranslation();

  return (
    <Grid item sm={6}>
    <h3>{t('consultant')}</h3>
    <p>{t('consultant.description')}</p>
    </Grid>
  )
}

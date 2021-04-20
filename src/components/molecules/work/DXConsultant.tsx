import { Grid } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next';

export const DXConsultant = () => {
  const [t] = useTranslation();

  return (
    <Grid item sm={6}>
    <h3>{t('dxconsultant', {defaultValue: 'DX consultant'})}</h3>
    <p>{t('dxconsultant.description', {defaultValue: ''})}</p>
    </Grid>
  )
}

import { Grid } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next';

export const DXConsultant = () => {
  const { t, ready } = useTranslation();
  let dxconsultant = 'DX Consultant', description = ''
  if (ready) {
    dxconsultant = t('dxconsultant')
    description = t('dxconsultant.description')
  }
  

  return (
    <Grid item sm={6}>
    <h3>{dxconsultant}</h3>
    <p>{description}</p>
    </Grid>
  )
}

import { Grid } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next';

export const Software = () => {
  const { t, ready } = useTranslation();
  let software = 'Software Development', description = ''
  if (ready) {
    software = t('software')
    description = t('software.description')
  }

  return (
    <Grid item sm={6}>
    <h3>{software}</h3>
    <p>{description}</p>
    </Grid>
  )
}

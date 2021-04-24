import { Grid } from '@material-ui/core'
import React from 'react'
import { MainBox } from '../molecules/MainBox'
import { Software } from '../molecules/work/Software'
import { Consultant } from '../molecules/work/Consultant'
import { DXConsultant } from '../molecules/work/DXConsultant'
import { Pdm } from '../molecules/work/Pdm'
import { SDGs } from '../molecules/work/SDGs'

export const Works = () => {
  return (
    <MainBox>
    <h2>Works</h2>
    <Grid container spacing={3} justify='flex-start' alignItems='flex-start'>
      <Software />
      <SDGs />
      <DXConsultant />
      <Consultant />
      <Pdm />
    </Grid>
    </MainBox>
  )
}

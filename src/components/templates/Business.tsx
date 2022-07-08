import { Typography } from '@mui/material'
import React from 'react'
import { Works } from '../organisms/Works'
import Base from './Base'

const Business = ({ pageContext }) => {
  return (
    <Base pageContext={pageContext}>
      <Typography variant="h2">事業情報</Typography>
      <Works />
    </Base>
  )
}

export default Business

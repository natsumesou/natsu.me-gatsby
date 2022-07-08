import { Typography } from '@material-ui/core'
import React from 'react'
import { About } from '../organisms/About'
import Base from './Base'

const Company = ({ pageContext }) => {
  return (
    <Base pageContext={pageContext}>
      <Typography variant="h2">会社概要</Typography>
      <About />
    </Base>
  )
}

export default Company

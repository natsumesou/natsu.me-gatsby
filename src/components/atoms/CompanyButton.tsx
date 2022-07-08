import { Button } from '@material-ui/core'
import Business from '@material-ui/icons/Business'
import { IconButton } from 'gatsby-theme-material-ui'
import React from 'react'

export const CompanyButton = (props) => {
  const { onlyIcon, ...rest } = props

  if (onlyIcon) {
    return (
      <IconButton size="medium" href="/company" {...rest}>
        <Business />
      </IconButton>
    )
  } else {
    return (
      <Button size="large" startIcon={<Business />} href="/company" {...rest}>
        企業情報
      </Button>
    )
  }
}

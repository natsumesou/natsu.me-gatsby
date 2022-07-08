import { Button } from '@material-ui/core'
import Public from '@material-ui/icons/Public'
import { IconButton } from 'gatsby-theme-material-ui'
import React from 'react'

export const BusinessButton = (props) => {
  const { onlyIcon, ...rest } = props

  if (onlyIcon) {
    return (
      <IconButton size="medium" href="/business" {...rest}>
        <Public />
      </IconButton>
    )
  } else {
    return (
      <Button size="large" startIcon={<Public />} href="/business" {...rest}>
        事業情報
      </Button>
    )
  }
}

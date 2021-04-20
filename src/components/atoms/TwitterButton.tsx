import { Button } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import React from 'react'

export const TwitterButton = () => {
  return (
    <Button size="medium" startIcon={<TwitterIcon />} target="_blank" rel="noreferrer" href="https://twitter.com/natsumesou">
      Twitter
    </Button>
  )
}

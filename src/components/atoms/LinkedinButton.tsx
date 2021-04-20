import { Button } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import React from 'react'

export const LinkedinButton = () => {
  return (
    <Button size="medium" startIcon={<LinkedInIcon />} target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/yoshiaki-natsume">
      LinkedIn
    </Button>
  )
}

import { Button } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import React from 'react'

export const GitHubButton = () => {
  return (
    <Button size="medium" startIcon={<GitHubIcon />} target="_blank" rel="noreferrer" href="https://github.com/natsumesou">
      GitHub
    </Button>
  )
}

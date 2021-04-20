import React from 'react'
import { GitHubButton } from '../atoms/GitHubButton'
import { LinkedinButton } from '../atoms/LinkedinButton'
import { TwitterButton } from '../atoms/TwitterButton'
import { MainBox } from '../molecules/MainBox'

export const Links = () => {
  return (
    <MainBox>
      <h2>Links</h2>
      <TwitterButton />
      <GitHubButton />
      <LinkedinButton />
    </MainBox>
  )
}
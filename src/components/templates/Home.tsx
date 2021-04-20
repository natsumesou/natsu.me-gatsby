import { Box } from '@material-ui/core'
import React from 'react'
import { About } from '../organisms/About'
import { Appetizer } from '../organisms/Appetizer'
import { ContactButton } from '../atoms/ContactButton'
import { Links } from '../organisms/Links'
import { Works } from '../organisms/Works'
import { Footer } from '../organisms/Footer'

const Home = () => {
  return (
    <Box>
      <Works />
      <Appetizer />
      <About />
      <Links />
      <ContactButton />
    </Box>
  )
}

export default Home

import { Box } from '@material-ui/core'
import React from 'react'
import { About } from '../organisms/About'
import { Appetizer } from '../organisms/Appetizer'
import { Contact } from '../organisms/Contact'
import { Links } from '../organisms/Links'
import { Works } from '../organisms/Works'

const Home = () => {
  return (
    <Box>
      <Works />
      <Contact />
      <Appetizer />
      <About />
      <Links />
    </Box>
  )
}

export default Home

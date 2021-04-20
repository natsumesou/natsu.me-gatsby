import { Box } from '@material-ui/core'
import React from 'react'
import { About } from '../organisms/About'
import { Appetizer } from '../organisms/Appetizer'
import { ContactButton } from '../atoms/ContactButton'
import { Links } from '../organisms/Links'
import { Works } from '../organisms/Works'
import SEO from '@/components/SEO';

const Home = ({ pageContext }) => {
  const { site } = pageContext;
  
  return (
    <Box>
      <SEO siteMetadata={site.siteMetadata} />
      <Works />
      <Appetizer />
      <About />
      <Links />
      <ContactButton />
    </Box>
  )
}

export default Home

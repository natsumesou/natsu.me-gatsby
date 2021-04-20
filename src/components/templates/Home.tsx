import { Box } from '@material-ui/core'
import React from 'react'
import { About } from '../organisms/About'
import { Appetizer } from '../organisms/Appetizer'
import { ContactFloatButton } from '../atoms/ContactFloatButton'
import { Links } from '../organisms/Links'
import { Works } from '../organisms/Works'
import SEO from '@/components/SEO';
import { Contact } from '../organisms/Contact'

const Home = ({ pageContext }) => {
  const { site } = pageContext;

  return (
    <Box>
      <SEO siteMetadata={site.siteMetadata} />
      <Works />
      <Contact />
      <Appetizer />
      <About />
      <Links />
      <ContactFloatButton />
    </Box>
  )
}

export default Home

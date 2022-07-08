import { Box } from '@material-ui/core'
import React from 'react'
import { ContactFloatButton } from '../atoms/ContactFloatButton'
import SEO from '@/components/SEO'
import { Header } from '@/components/organisms/Header'
import { Content } from '../organisms/Content'

const Base = ({ children, pageContext = null }) => {
  return (
    <Box>
      <Header />
      <Content>{children}</Content>
      {pageContext ? (
        <SEO siteMetadata={pageContext.site.siteMetadata} />
      ) : null}
      <ContactFloatButton />
    </Box>
  )
}

export default Base

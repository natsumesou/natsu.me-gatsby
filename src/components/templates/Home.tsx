import { Box } from '@mui/material'
import React from 'react'
import { ContactFloatButton } from '../atoms/ContactFloatButton'
import { Links } from '../organisms/Links'
import SEO from '@/components/SEO'
import { TopHeader } from '@/components/organisms/TopHeader'
import { Title } from '@/components/organisms/Title'
import { Content } from '../organisms/Content'

const Home = ({ pageContext }) => {
  const { site } = pageContext

  return (
    <Box>
      <TopHeader />
      <Content>
        <Title />
        <Links />
      </Content>
      <SEO siteMetadata={site.siteMetadata} />
      <ContactFloatButton />
    </Box>
  )
}

export default Home

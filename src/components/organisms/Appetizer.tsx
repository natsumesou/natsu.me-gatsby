import { Box } from '@material-ui/core';
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const style: React.CSSProperties = {
  width: '100%',
  height: 'calc(100vw/3)',
};

export const Appetizer = () => {
  return (
    <Box>
      <StaticImage src="../../images/appetizer.webp" alt="middle image" objectFit={ 'cover' } style={ style } />
    </Box>
  )
}

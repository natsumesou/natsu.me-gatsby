import { Box } from '@material-ui/core';
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const boxStyle: React.CSSProperties = {
  marginTop: 20
};

const style: React.CSSProperties = {
  width: '100%',
  height: 'calc(100vw/3)',
};

export const Appetizer = () => {
  return (
    <Box style={boxStyle}>
      <StaticImage src="../../images/appetizer.webp" alt="middle image" objectFit={ 'cover' } style={ style } />
    </Box>
  )
}

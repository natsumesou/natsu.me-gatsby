import { Button, styled } from '@mui/material'
import PublicIcon from '@mui/icons-material/Public'
import { IconButton } from 'gatsby-theme-material-ui'
import React from 'react'

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
}))

export const BusinessButton = (props) => {
  const { onlyIcon, ...rest } = props

  if (onlyIcon) {
    return (
      <IconButton size="medium" href="/business" {...rest}>
        <PublicIcon />
      </IconButton>
    )
  } else {
    return (
      <StyledButton
        size="medium"
        startIcon={<PublicIcon />}
        href="/business"
        {...rest}
      >
        事業情報
      </StyledButton>
    )
  }
}

import { Button, styled } from '@mui/material'
import BusinessIcon from '@mui/icons-material/Business'
import { IconButton } from 'gatsby-theme-material-ui'
import React from 'react'

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
}))

export const CompanyButton = (props) => {
  const { onlyIcon, ...rest } = props

  if (onlyIcon) {
    return (
      <IconButton size="medium" href="/company" {...rest}>
        <BusinessIcon />
      </IconButton>
    )
  } else {
    return (
      <StyledButton
        size="medium"
        startIcon={<BusinessIcon />}
        href="/company"
        {...rest}
      >
        企業情報
      </StyledButton>
    )
  }
}

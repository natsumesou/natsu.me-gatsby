import { AppBar, Toolbar, useMediaQuery, Box, Theme } from '@mui/material'
import { styled } from '@mui/material'
import React from 'react'
import { TitleButton } from '../atoms/TitleButton'
import { CompanyButton } from '../atoms/CompanyButton'
import { BusinessButton } from '../atoms/BusinessButton'

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  margin: '0 10vw',
  [theme.breakpoints.down('sm')]: {
    margin: '0',
  },
}))

const StyledBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  justifyContent: 'flex-start',
}))

const StyledTitleButton = styled(TitleButton)({
  flexGrow: 1,
  justifyContent: 'flex-start',
})

export const Header = () => {
  const isSM = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  return (
    <header>
      <AppBar position="sticky">
        <StyledToolbar variant="regular">
          <StyledBox>
            <StyledTitleButton />
          </StyledBox>
          <CompanyButton onlyIcon={isSM} />
          <BusinessButton onlyIcon={isSM} />
        </StyledToolbar>
      </AppBar>
    </header>
  )
}

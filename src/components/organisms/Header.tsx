import {
  AppBar,
  Toolbar,
  useMediaQuery,
  Box,
  Theme,
  useTheme,
} from '@mui/material'
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

const StyledBox = styled(Box)({
  flexGrow: 1,
  justifyContent: 'flex-start',
})

export const Header = () => {
  const theme = useTheme()
  const isSM = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <header>
      <AppBar position="sticky">
        <StyledToolbar variant="regular">
          <StyledBox>
            <TitleButton />
          </StyledBox>
          <CompanyButton onlyIcon={isSM} />
          <BusinessButton onlyIcon={isSM} />
        </StyledToolbar>
      </AppBar>
    </header>
  )
}

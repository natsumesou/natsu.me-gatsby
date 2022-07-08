import { Typography, Grid, styled } from '@mui/material'
import React from 'react'

const StyledGrid = styled(Grid)({
  margin: '1em -8px',
  flexDirection: 'column',
})

const StyledGridItem = styled(Grid)({
  display: 'flex',
  borderBottom: '1px solid #e6e6e6',
  alignItems: 'center',
  paddingTop: '0 !important',
})

const StyledTypographyDt = styled(Typography)({
  flex: 1,
})

const StyledTypographyDD = styled(Typography)({
  flex: 1,
})

export const About = () => {
  return (
    <StyledGrid container component="dl" spacing={2}>
      <StyledGridItem item>
        <StyledTypographyDt component="dt" variant="body1">
          社名
        </StyledTypographyDt>
        <StyledTypographyDD component="dd" variant="body1">
          vonxai合同会社
        </StyledTypographyDD>
      </StyledGridItem>
      <StyledGridItem item>
        <StyledTypographyDt component="dt" variant="body1">
          本社所在地
        </StyledTypographyDt>
        <StyledTypographyDD component="dd" variant="body1">
          東京都渋谷区
        </StyledTypographyDD>
      </StyledGridItem>
      <StyledGridItem item>
        <StyledTypographyDt component="dt" variant="body1">
          最高経営責任者
        </StyledTypographyDt>
        <StyledTypographyDD component="dd" variant="body1">
          夏目佳明
        </StyledTypographyDD>
      </StyledGridItem>
      <StyledGridItem item>
        <StyledTypographyDt component="dt" variant="body1">
          設立
        </StyledTypographyDt>
        <StyledTypographyDD component="dd" variant="body1">
          2022年07月01日
        </StyledTypographyDD>
      </StyledGridItem>
      <StyledGridItem item>
        <StyledTypographyDt component="dt" variant="body1">
          資本金
        </StyledTypographyDt>
        <StyledTypographyDD component="dd" variant="body1">
          1百万円
        </StyledTypographyDD>
      </StyledGridItem>
    </StyledGrid>
  )
}

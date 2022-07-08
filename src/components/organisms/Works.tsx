import { Typography, styled, Grid } from '@mui/material'
import React from 'react'

const StyledGrid = styled(Grid)({
  margin: '1em -8px',
  flexDirection: 'column',
})

const StyledGridItem = styled(Grid)({
  display: 'flex',
  borderBottom: '1px solid #e6e6e6',
  alignItems: 'center',
  padding: '1rem 0',
})

const StyledTypographyDt = styled(Typography)({
  flex: 1,
})

const StyledTypographyDD = styled(Typography)({
  flex: 2,
  paddingLeft: '1em',
})

export const Works = () => {
  return (
    <StyledGrid container component="dl" spacing={2}>
      <StyledGridItem item>
        <StyledTypographyDt component="dt" variant="body1">
          開発支援
        </StyledTypographyDt>
        <StyledTypographyDD component="dd" variant="body1">
          事業のIT化、DX(デジタルトランスフォーメーション)化、サービス開発の支援。
        </StyledTypographyDD>
      </StyledGridItem>
      <StyledGridItem item>
        <StyledTypographyDt component="dt" variant="body1">
          テクニカルコンサルタント
        </StyledTypographyDt>
        <StyledTypographyDD component="dd" variant="body1">
          サービスやアプリケーションのパフォーマンス改善やソフトウェア開発での課題の発見・解決に関するコンサルタント、AWSやGCPを利用したクラウドネイティブなアーキテクチャ設計の支援。WordPressやShopify、EC-CUBEなどでのオウンドメディア・オウンドマーケットの導入支援、個人情報管理やクレジットカードの非保持化におけるセキュリティコンサルタント等。
        </StyledTypographyDD>
      </StyledGridItem>
      <StyledGridItem item>
        <StyledTypographyDt component="dt" variant="body1">
          ウェブサービス・AR・VR開発事業
        </StyledTypographyDt>
        <StyledTypographyDD component="dd" variant="body1">
          ウェブサービス・AR・VR関連の開発。
        </StyledTypographyDD>
      </StyledGridItem>
      <StyledGridItem item>
        <StyledTypographyDt component="dt" variant="body1">
          動画・ライブ配信サポート事業
        </StyledTypographyDt>
        <StyledTypographyDD component="dd" variant="body1">
          各配信プラットフォームでの配信、実況、配信者のサポートやそれらに付随する業務。
        </StyledTypographyDD>
      </StyledGridItem>
      <StyledGridItem item>
        <StyledTypographyDt component="dt" variant="body1">
          e-sports支援事業
        </StyledTypographyDt>
        <StyledTypographyDD component="dd" variant="body1">
          e-sports文化の発展に関わる業務。
        </StyledTypographyDD>
      </StyledGridItem>
    </StyledGrid>
  )
}

import {
  Typography,
  makeStyles,
  createStyles,
  Theme,
  Grid,
} from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      margin: '1em -8px',
      flexDirection: 'column',
    },
    griditem: {
      display: 'flex',
      borderBottom: '1px solid #e6e6e6',
      alignItems: 'center',
    },
    dt: {
      flex: 1,
    },
    dd: {
      flex: 2,
      paddingLeft: '1em',
    },
  })
)

export const Works = () => {
  const classes = useStyles()

  return (
    <Grid container component="dl" spacing={2} className={classes.grid}>
      <Grid item className={classes.griditem}>
        <Typography component="dt" variant="body1" className={classes.dt}>
          開発支援
        </Typography>
        <Typography component="dd" variant="body1" className={classes.dd}>
          事業のIT化、DX(デジタルトランスフォーメーション)化、サービス開発の支援。
        </Typography>
      </Grid>
      <Grid item className={classes.griditem}>
        <Typography component="dt" variant="body1" className={classes.dt}>
          テクニカルコンサルタント
        </Typography>
        <Typography component="dd" variant="body1" className={classes.dd}>
          サービスやアプリケーションのパフォーマンス改善やソフトウェア開発での課題の発見・解決に関するコンサルタント、AWSやGCPを利用したクラウドネイティブなアーキテクチャ設計の支援。WordPressやShopify、EC-CUBEなどでのオウンドメディア・オウンドマーケットの導入支援、個人情報管理やクレジットカードの非保持化におけるセキュリティコンサルタント等。
        </Typography>
      </Grid>
      <Grid item className={classes.griditem}>
        <Typography component="dt" variant="body1" className={classes.dt}>
          ウェブサービス・AR・VR開発事業
        </Typography>
        <Typography component="dd" variant="body1" className={classes.dd}>
          ウェブサービス・AR・VR関連の開発。
        </Typography>
      </Grid>
      <Grid item className={classes.griditem}>
        <Typography component="dt" variant="body1" className={classes.dt}>
          動画・ライブ配信サポート事業
        </Typography>
        <Typography component="dd" variant="body1" className={classes.dd}>
          各配信プラットフォームでの配信、実況、配信者のサポートやそれらに付随する業務。
        </Typography>
      </Grid>
      <Grid item className={classes.griditem}>
        <Typography component="dt" variant="body1" className={classes.dt}>
          e-sports支援事業
        </Typography>
        <Typography component="dd" variant="body1" className={classes.dd}>
          e-sports文化の発展に関わる業務。
        </Typography>
      </Grid>
    </Grid>
  )
}

import { makeStyles, createStyles } from '@material-ui/core'
import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const useStyles = makeStyles(
  createStyles({
    header: {
      width: '100%',
      height: '75vh',
    },
    viewport: {
      height: 'inherit',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    slide: {
      height: '100%',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      position: 'absolute',
      left: 0,
      width: '100%',

      '&:nth-of-type(1) img': {
        animationDelay: '0s',
      },
      '&:nth-of-type(2) img': {
        animationDelay: '4s',
      },
      '&:nth-of-type(3) img': {
        animationDelay: '8s',
      },
    },
    image: {
      width: '100%',
      height: '100%',
      '& img': {
        opacity: '0 !important',
        animationName: 'fade, up',
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
        animationDuration: '14s',
      },
    },
  })
)

export const TopHeader = () => {
  const classes = useStyles()

  return (
    <header className={classes.header}>
      <style>
        {`
          @keyframes up {
            0% {
              transform: translateY(0px);
            }
            90% {
              transform: translateY(-100px);
            }
            91%, 100% {
              transform: translateY(0px);
            }
          }
          @keyframes fade {
            0% {
              opacity: 0;
            }
            8%, 42% {
              opacity: 1;
            }
            50%, 100% {
              opacity: 0;
            }
          }
        `}
      </style>
      <ol className={classes.viewport}>
        <li className={classes.slide}>
          <StaticImage
            src="../../images/header01.webp"
            alt="header image"
            objectFit={'cover'}
            className={classes.image}
          />
        </li>
        <li className={classes.slide}>
          <StaticImage
            src="../../images/header02.webp"
            alt="header image"
            objectFit={'cover'}
            className={classes.image}
          />
        </li>
        <li className={classes.slide}>
          <StaticImage
            src="../../images/header03.webp"
            alt="header image"
            objectFit={'cover'}
            className={classes.image}
          />
        </li>
      </ol>
    </header>
  )
}

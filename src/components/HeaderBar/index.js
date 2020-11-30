import React, { useState, useEffect } from 'react'
import style from './style'
import { withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import { Logo, Footer } from 'components'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { makeStyles } from '@material-ui/styles'
import GitHubIcon from '@material-ui/icons/GitHub'
import clsx from 'clsx'

// Start button coloring config
const greenThreshold = 159
const redThreshold = 12
const blueThreshold = 88

// Lower number, faster turn green
const greenDivisor = 2

// Blur config
const blurThreshold = 8
const blurMinimum = 4

// Lower number, faster blur increase
const blurDivisor = 50

// Box shadow config
const shadowThreshold = 0.8
const shadowDivisor = 2000

const useStyles = makeStyles(theme => ({
  start_background: props => ({
    transition: 'all 0.5s',
    backgroundColor:
      'rgba(' +
      (props.scrollY / greenDivisor > redThreshold
        ? redThreshold
        : props.scrollY / greenDivisor) +
      ', ' +
      (props.scrollY / greenDivisor > greenThreshold
        ? greenThreshold
        : props.scrollY / greenDivisor) +
      ', ' +
      (props.scrollY / greenDivisor > blueThreshold
        ? blueThreshold
        : props.scrollY / greenDivisor) +
      ', 1)',
    color: theme.overrides.background,
    '&:hover': {
      color: theme.overrides.text
    }
  }),

  header_background: props => {
    if (window.CSS.supports('backdrop-filter', 'blur(1px)')) {
      return {
        background: 'rgba(255,255,255,0.3)',
        backdropFilter:
          'blur(' +
          (Math.round(props.scrollY / blurDivisor) > blurThreshold
            ? blurThreshold
            : Math.round(props.scrollY / blurDivisor) < blurMinimum
              ? blurMinimum
              : Math.round(props.scrollY / blurDivisor)) +
          'px)',
        boxShadow:
          '0px 0px 5px 2px rgba(25, 25, 25,' +
          (props.scrollY / shadowDivisor > shadowThreshold
            ? shadowThreshold
            : props.scrollY / shadowDivisor) +
          ')'
      }
    } else {
      return {
        background: 'rgba(255,255,255,0.8)',
        boxShadow:
          '0px 0px 5px 2px rgba(25, 25, 25,' +
          (props.scrollY / shadowDivisor > shadowThreshold
            ? shadowThreshold
            : props.scrollY / shadowDivisor) +
          ')'
      }
    }
  }
}))

const Header = ({ classes, children, showFooter }) => {
  const [scrollY, setScrollY] = useState(0)
  const dynamicStyles = useStyles({ scrollY })

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)
    return () => document.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div
        className={clsx(
          classes.desktop_content_wrap,
          dynamicStyles.header_background,
          'header-background'
        )}
      >
        <div className={classes.content}>
          <Link to='/home'>
            <Logo />
          </Link>
          <div className={classes.github}>
            <a href='https://github.com/justusmary/charyeok' target="blank">
              <GitHubIcon color="primary"/>
            </a>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          classes.mobile_content_wrap,
          dynamicStyles.header_background
        )}
      >
        <div className={classes.content}>
          <Link to='/home'>
            <Logo className={classes.mobile_logo} />
          </Link>
          <div className={classes.github}>
            <a href='https://github.com/justusmary/charyeok' target="blank">
              <GitHubIcon color="primary"/>
            </a>
          </div>
        </div>
      </div>
      <div className={classes.children}>{children}</div>
      {showFooter ? (
        <div className={classes.footer}>
          <Footer />
        </div>
      ) : (
        false
      )}
    </>
  )
}

Header.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.any,
  history: PropTypes.object,
  showFooter: PropTypes.bool,
  subHeader: PropTypes.any
}

export default withStyles(style)(withRouter(Header))

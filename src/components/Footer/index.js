import React from 'react'
import style from './style'
import { Typography, withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import { SocialIcons, Logo } from 'components'
import { Link } from 'react-router-dom'

const Footer = ({ classes }) => (
  <div className={classes.bg}>
    <div className={classes.content_wrap}>
      <div className={classes.sub_container_1}>
        <div className={classes.logo_wrap}>
          <Logo className={classes.logo} iconColor='black' />
        </div>
        <Typography className={classes.copyright} paragraph>
          Copyright &copy; {new Date().getUTCFullYear()} Charyeok
        </Typography>
        <Typography className={classes.copyright} paragraph>
        support@charyeok.io
        </Typography>
        <Typography className={classes.content} paragraph>
          <Link className={classes.link} to='/terms'>
            Terms
          </Link>
        </Typography>
        <Typography className={classes.pipe_class} paragraph>
          {'  |  '}
        </Typography>
        <Typography className={classes.content} paragraph>
          <Link className={classes.link} to='/privacy'>
            Privacy
          </Link>
        </Typography>
        <SocialIcons />
      </div>
    </div>
  </div>
)

Footer.propTypes = {
  classes: PropTypes.object
}

export default withStyles(style)(Footer)

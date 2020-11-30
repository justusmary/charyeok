import React from 'react'
import style from './style'
import { withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import {
  twitter,
  instagram,
  reddit,
  facebook,
  linkedin,
  youtube
} from 'res/SocialIcons/'

const SocialIcons = ({ classes, className }) => (
  <div className={`${classes.button_container} ${className}`}>
    <a
      className={classes.icon_wrapper_link}
      target='_blank'
      rel='noopener noreferrer'
      href='https://twitter.com/'
    >
      <svg className={classes.social_icon}>
        <title>twitter</title>
        {twitter}
      </svg>
    </a>
    <a
      className={classes.icon_wrapper_link}
      target='_blank'
      rel='noopener noreferrer'
      href='https://www.instagram.com/'
    >
      <svg className={classes.social_icon}>
        <title>instagram</title>
        {instagram}
      </svg>
    </a>
    <a
      className={classes.icon_wrapper_link}
      target='_blank'
      rel='noopener noreferrer'
      href='https://www.reddit.com/'
    >
      <svg className={classes.social_icon}>
        <title>reddit</title>
        {reddit}
      </svg>
    </a>
    <a
      className={classes.icon_wrapper_link}
      target='_blank'
      rel='noopener noreferrer'
      href='https://www.facebook.com/'
    >
      <svg className={classes.social_icon}>
        <title>facebook</title>
        {facebook}
      </svg>
    </a>
    <a
      className={classes.icon_wrapper_link}
      target='_blank'
      rel='noopener noreferrer'
      href='https://www.linkedin.com/'
    >
      <svg className={classes.social_icon}>
        <title>linkedin</title>
        {linkedin}
      </svg>
    </a>
    <a
      className={classes.icon_wrapper_link}
      target='_blank'
      rel='noopener noreferrer'
      href='https://www.youtube.com/'
    >
      <svg className={classes.social_icon}>
        <title>youtube</title>
        {youtube}
      </svg>
    </a>
  </div>
)

SocialIcons.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string
}

export default withStyles(style)(SocialIcons)

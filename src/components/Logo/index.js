import React from 'react'
import style from './style'
import LogoImage from 'res/Logo/logo.svg'
import { withStyles, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

const Logo = ({
  classes,
  onClick = () => {},
}) => (
  <div
    onClick={onClick}
    className={classes.logo_wrap}
  >
    <img src={LogoImage} alt="logo" height={39}/>
    <Typography 
      variant="h6"
    >
      CHARYEOK
    </Typography>
  </div>
)

Logo.propTypes = {
  classes: PropTypes.object,
  onClick: PropTypes.func,
  iconColor: PropTypes.string
}

export default withStyles(style)(Logo)

import React, { useContext } from 'react'
import { MuiThemeProvider } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from "@material-ui/core/CssBaseline";
import PropTypes from 'prop-types'
import { ThemeContext } from 'context'

const Theme = ({ children }) => {

  const { currentTheme } = useContext(ThemeContext)

  return (
    
      <MuiThemeProvider theme={currentTheme}>
        <CssBaseline/>
        <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
      </MuiThemeProvider>
    
  )
}

Theme.propTypes = {
  children: PropTypes.any
}

export default Theme
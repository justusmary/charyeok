import { createMuiTheme } from '@material-ui/core'
import PropTypes from 'prop-types'
import colors from './colors'
import config from './config'


const Theme = createMuiTheme({
  ...config,
  palette: {
    // Main Colors
    type: 'dark',
    primary: { main: colors.primary },
    secondary: { main: colors.secondary },
    background: { 
      default: colors.overrides.background,
      paper: '#945D5E'
    }
  },
  overrides: {
    ...colors.overrides,
    MuiTypography: {
      h1: {
        fontSize: '2.5rem',
        fontWeight: '500',
        color: colors.overrides.text
      },
      h2: {
        fontSize: '1.5rem',
        fontWeight: '500',
        color: colors.overrides.text
      },
      h3: {
        fontSize: '1.3rem',
        fontWeight: '500',
        color: colors.overrides.text
      },
      h4: {
        fontSize: '1.2rem',
        fontWeight: '500',
        color: colors.overrides.text
      },
      h5: {
        fontSize: '1.1rem',
        fontWeight: '500',
        color: colors.overrides.text
      },
      h6: {
        fontSize: '1rem',
        fontWeight: '500',
        color: colors.overrides.text
      },
      subtitle1: {
        color: colors.overrides.grey
      },
      body1: {
        color: colors.overrides.text
      },
      body2: {
        fontSize: '1rem'
      },
      caption: {
        color: colors.overrides.grey
      },
      paragraph: {
        color: colors.overrides.text
      },
    },
    MuiButton: {
      containedPrimary: {
        borderRadius: '3em',
        height: '3em',
        color: colors.overrides.background
      }
    },
    MuiOutlinedInput: {
      // input: {
      //   padding: '13px'
      // }
    },
    MuiExpansionPanel: {
      root: {
        '&.Mui-expanded': {
          margin: '0px!important'
        }
      }
    },
    MuiPaper: {
      elevation1: {
        boxShadow: 'unset'
      }
    }
  },
  typography: { useNextVariants: true }
})

Theme.typography.h1 = {
  [Theme.breakpoints.down('xs')]: {
    fontSize: '1.5em'
  }
}

Theme.typography.h2 = {
  [Theme.breakpoints.down('xs')]: {
    fontSize: '1.25em',
    fontWeight: '700'
  }
}

Theme.typography.subtitle1 = {
  [Theme.breakpoints.down('xs')]: {
    fontSize: '0.8em'
  }
}

Theme.propTypes = {
classes: PropTypes.object,
children: PropTypes.any,
theme: PropTypes.string
}

export default Theme

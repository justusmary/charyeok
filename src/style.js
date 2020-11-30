// import colors from 'components/Theme/colors'

const style = theme => ({
  '@global body': {
    padding: '0px',
    margin: '0px',
    fontFamily: 'helvetica, helvetica neue, sans-serif',
    height: '100%',
    position: 'relative'
  },
  '@global html': {
    minHeight: '100%'
  },
  '@global .wrapper': {
    maxWidth: '1500px',
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
    margin: '0px auto'
  },
  '@global a': {
    textDecoration: 'none'
  },
  '@global ::-webkit-scrollbar': {
    display: 'none'
  },

  [theme.mobile]: {
    '@global body': {
      padding: '0px',
      margin: '0px',
      fontFamily: 'helvetica, helvetica neue, sans-serif',
      height: '100%'
    }
  }
})

export default style

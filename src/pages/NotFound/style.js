const style = theme => ({
  content_wrap: {
    maxWidth: theme.maxContentWidth,
    width: '100%',
    margin: 'auto'
  },
  title: {
    fontSize: '3em'
  },
  content: {
    margin: '2rem'
  },
  inline_section: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    alignItems: 'center',
    gridColumnGap: '0.5em'
  },
  code_block: {
    border: '1px solid black',
    padding: '0.5em',
    boirderRadius: '5px',
    background: theme.overrides.darkGradient1,

    boxShadow: `inset 0 0 2px ${theme.overrides.sitePrimary}`,
    maxWidth: '10em'
  },
  // Currency Icons
  icons_container: {
    width: '90vw',
    height: '90vh',
    margin: 'auto',
    position: 'relative'
  },
  icon: {
    position: 'absolute',
    top: 0,
    left: 'calc(80vw / 2)',
    width: '3em'
  },
  currency: {
    width: '3em'
  },
  instructions: {
    marginTop: '1.5em'
  },
  button: {
    positon: 'relative',
    zIndex: 1
  },
  [theme.mobile]: {
    inline_section: {
      gridTemplateColumns: '1fr',
      gridRowGap: '0.25em'
    },
    button_main: {
      margin: '0.5em'
    },
    icon: {
      left: 'calc(0vw / 2)'
    },
    content: {
      margin: '0.5rem'
    },
    title: {
      fontSize: '1.5em'
    }
  }
})

export default style

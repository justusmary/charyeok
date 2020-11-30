const style = theme => {
  return {
    desktop_buttons: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, auto)',
      gridColumnGap: '1em',
      justifyItems: 'center',
      flexFlow: 'row nowrap',
      justifyContent: 'flex-end',
      '& *': {
        textTransform: 'capitalize'
      }
    },
    github: {
      display: 'flex',
      flexDirection: 'column',
      placeItems: 'flex-end'
    },
    content: {
      display: 'grid',
      padding: '0.5em 1em 0.5em',
      alignItems: 'center',
      alignContent: 'center',
      gridTemplateColumns: 'minmax(5em, 10em) auto',
      maxWidth: '1000px',
      margin: '0px auto'
    },
    logo: {
      width: '100%'
    },
    desktop_content_wrap: {
      margin: '0px',
      padding: '10px 0px',
      top: '0px',
      width: '100%',
      position: 'sticky',
      zIndex: 98
    },
    mobile_content_wrap: {
      display: 'none'
    },
    mobile_hamburger: {},
    mobile_dropdown: {
      '& *': {
        outline: 'none'
      }
    },
    icon_container: {
      display: 'grid',
      padding: '1em',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridGap: '0.5em'
    },
    icon_label: {
      textAlign: 'center',
      color: theme.overrides.black
    },
    [theme.tablet]: {
      desktop_buttons: {
        gridColumnGap: '0px'
      }
    },
    [theme.mobile]: {
      button: {
        'text-align': 'left'
      },
      desktop_content_wrap: {
        display: 'none'
      },
      mobile_content_wrap: {
        display: 'block',
        width: '100%',
        margin: '0px',
        padding: '10px 0px',
        position: 'sticky',
        zIndex: 98,
        top: 'env(safe-area-inset-top)',
        fallbacks: {
          top: '0px'
        }
      },
      content: {
        position: 'sticky',
        padding: '0px 1em',
        'z-index': '1',
        top: '0px',
        display: 'grid',
        gridTemplateColumns: '1fr 3em'
      },
      page: {
        marginTop: '3em',
        marginBottom: '15em'
      },
      icon_container: {
        padding: '0.5em',
        gridGap: '0px'
      },
      children: {
        position: 'relative'
      }
    }
  }
}

export default style
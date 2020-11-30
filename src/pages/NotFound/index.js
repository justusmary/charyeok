import React from 'react'
import style from './style'
import {
  Card,
  CardContent,
  Typography,
  Button,
  withStyles
} from '@material-ui/core'
import { HeaderBar } from 'components'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'

const NotFound = ({ classes, history }) => {
  

  return (
    <>
      <Helmet>
        <title>Not Found » Charyeok</title>
        <meta
          name='description'
          content="Uh Oh! It looks like the page you're
      looking for isn't here!"
        />
        <meta
          name='keywords'
          content='charyeok notfound'
        />
        <meta
          property='og:description'
          content="Uh Oh! It looks like the page you're
      looking for isn't here!"
        />
        <meta
          name='description'
          content="Uh Oh! It looks like the page you're
      looking for isn't here!"
        />
        <meta property='og:title' content='Not Found » Charyeok' />
        <meta property='og:url' content='https://charyeok.io/notfound/' />
      </Helmet>
      <HeaderBar showFooter>
        <Card className={classes.content_wrap} square>
          <CardContent className={classes.content}>
            <Typography
              paragraph
              variant='h1'
              classes={{ root: classes.title }}
              align='center'
            >
              Uh Oh! Page Not Found
            </Typography>
            <div className={classes.inline_section}>
              <Typography paragraph align='center'>
                An error has happend and we cannot find the page
              </Typography>
              {history.location.pathname.toLowerCase() !== '/notfound' && (
                <Typography paragraph className={classes.code_block}>
                  {history.location.pathname}
                </Typography>
              )}
            </div>
            <Typography paragraph>
              From here we can do a couple things:
            </Typography>
            <div className={classes.inline_section}>
              <Button
                variant='contained'
                color='primary'
                onClick={() => {
                  history.push('/')
                }}
              >
                Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </HeaderBar>
    </>
  )
}

NotFound.propTypes = {
  classes: PropTypes.object,
  history: PropTypes.object
}

export default withStyles(style)(NotFound)

import React, { useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import style from './style'
import { withStyles } from '@material-ui/styles'
import { Helmet } from 'react-helmet-async'
import { Grid, Paper, Typography } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons';
import { HeaderBar, Container } from 'components'
import { ThemeContext } from 'context'
import { connect } from 'react-redux'

const Note = ({ classes, note }) => {

  const { changeTheme } = useContext(ThemeContext)
  const history = useHistory()


  useEffect(() => {
    if (note) {
      changeTheme(note.theme)
    }
    else history.push("/")
  }, [note, history, changeTheme])

  return  (
    <>
      <Helmet>
        <title>
          Note
        </title>
        <meta
          property='og:title'
          content='Note'
        />
        <meta
          property='og:description'
          content=''
        />
        <meta
          name='description'
          content=''
        />
        <meta property='og:url' content='https://charyeok.io/note/' />
        <link rel='canonical' href='https://charyeok.io/note/' />
      </Helmet>
      <HeaderBar showFooter>
        <Container maxWidth>
          <div className={classes.root}>
            <Grid container justify="center">
              <Grid item xs={12} sm={12} md={6}>
                <Paper elevation={3} className={classes.form}>
                  <div className={classes.title_container}>
                    <Link to="/" className={classes.back_button}>
                      <ArrowBack color="primary"/>
                    </Link>
                    <Typography 
                      variant="h3" 
                      gutterBottom
                      className={classes.title_text}
                    >
                      {note && note.date}
                    </Typography>
                  </div>
                  <div>
                    <Typography 
                      variant="body1" 
                      gutterBottom
                      className={classes.message}
                    >
                      {note && note.message}
                    </Typography>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </Container>
      </HeaderBar>
    </>
  )
}

const mapStateToProps = state => ({
  note: state.note,
});

export default connect(mapStateToProps)(withStyles(style)(Note))

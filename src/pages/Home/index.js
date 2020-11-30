import React, { useContext, useEffect } from 'react'
import style from './style'
import { withStyles } from '@material-ui/styles'
import { Helmet } from 'react-helmet-async'
import { Container, HeaderBar } from 'components'
import { Form } from './subComponents'
import { ThemeContext } from 'context'

const Home = ({ classes }) => {

  const { changeTheme } = useContext(ThemeContext)

  useEffect(() => {
    if (changeTheme) {
      changeTheme()
    }
  })

  return (
    <>
      <Helmet>
        <title>
          Charyeok: Creativity | Art
        </title>
        <meta
          property='og:title'
          content='Charyeok: Creativity | Art'
        />
        <meta
          property='og:description'
          content=''
        />
        <meta
          name='description'
          content=''
        />
        <meta property='og:url' content='https://charyeok.io/home/' />
        <link rel='canonical' href='https://charyeok.io/' />
      </Helmet>
      <HeaderBar showFooter>
        <Container maxWidth>
          <Form />
        </Container>
      </HeaderBar>
    </>
  )
}

export default withStyles(style)(Home)

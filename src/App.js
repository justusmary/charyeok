import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { withStyles } from '@material-ui/core'
import baseStyle from './style'
import { Redirect } from 'react-router'
import { paths } from './pages'
import {
  Loading,
  ScrollTop
} from 'components'
import 'typeface-roboto'
import { ThemeContextProvider} from 'context'

const Theme = lazy(() =>
  import(
    /* webpackChunkName: "theme" */
    'components/Theme'
  )
)

const asyncPages = {}
// eslint-disable-next-line
Object.keys(paths).map(currentPage => {
  const Component = lazy(() =>
    import(
      /* webpackChunkName: "sitepage" */
      `./pages/${currentPage}`
    )
  )
  asyncPages[currentPage] = Component
})

const App = ({ location }) => {

  return (
    <Suspense fallback={<Loading pastDelay />}>
      <ThemeContextProvider>
      <Theme>
        <HelmetProvider>
          <Helmet>
            <meta name='robots' content='index,follow' />
            <meta charSet='utf-8' />
            <meta property='og:site_name' content='Charyeok' />
            <meta property='og:type' content='website' />
            <meta property='og:image' content='https://charyeok.io/logo.svg' />
          </Helmet>
          <Router>
            <ScrollTop />
            <Switch>
              <Redirect exact from='/home' to='/' noThrow />
              {/* Define routes */}
              {Object.entries(asyncPages).map(([currentPage, Page], i) => {
                const Component = Page
                return (
                  <Route
                    key={i}
                    exact={true}
                    render={props => <Component {...props} location={location} />}
                    path={paths[currentPage].replace(/\/\//g, '/')}
                  />
                )
              })}
              <Redirect to='/NotFound' />
            </Switch>
          </Router>
        </HelmetProvider>
      </Theme>
      </ThemeContextProvider>
    </Suspense>
  )
}

export default withStyles(baseStyle)(App)

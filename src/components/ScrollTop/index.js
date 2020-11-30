import React, { useEffect } from 'react' // eslint-disable-line
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'

const ScrollTop = ({ match }) => {
  useEffect(() => {
    const scrollBody = document.querySelector('#scroll_body')
    if (scrollBody) {
      scrollBody.scroll(0, 0)
    } else {
      window.scroll(0, 0)
    }
  }, [match])
  return null
}

ScrollTop.propTypes = {
  match: PropTypes.object
}

export default withRouter(ScrollTop)

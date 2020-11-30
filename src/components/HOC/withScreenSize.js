import React, { useState, useEffect } from 'react'
import { withTheme } from '@material-ui/styles'

const withScreenSize = Component =>
  withTheme(({ theme, ...props }) => {
    const [screenSize, setScreenSize] = useState(window.screenSize)
    const [screenHeight, setScreenHeight] = useState(window.innerHeight)

    useEffect(() => {
      const onScreenChange = () => {
        setScreenHeight(window.innerHeight)
        if (window.innerWidth < theme.mobileThreshold) {
          setScreenSize('mobile')
          window.screenSize = 'mobile'
        } else if (
          window.innerWidth > theme.mobileThreshold &&
          window.innerWidth < theme.tabletThreshold
        ) {
          setScreenSize('tablet')
          window.screenSize = 'tablet'
        } else {
          setScreenSize('desktop')
          window.screenSize = 'desktop'
        }
      }
      // window.innerWidth does not update fast enough
      // Therefore additional timer to ensure update happens timely
      const initialScreenChange = () => {
        clearTimeout(onScreenChange)
        setTimeout(onScreenChange, 50)
      }

      onScreenChange()
      window.addEventListener('resize', initialScreenChange)
      return () => window.removeEventListener('resize', initialScreenChange)
    }, [theme.mobileThreshold, theme.tabletThreshold])
    return (
      <Component
        screenHeight={screenHeight}
        screenSize={screenSize}
        theme={theme}
        {...props}
      />
    )
  })
export default withScreenSize

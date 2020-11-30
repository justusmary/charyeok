import React, { useState, createContext } from 'react'
import Dark from 'components/Theme/Dark'
import Brown from 'components/Theme/Brown'
import Default from 'components/Theme/Default'

const themes = {
  default: Default,
  dark: Dark,
  brown: Brown
}

export const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {

  const [ currentTheme, setTheme ] = useState(Default)

  const changeTheme = (theme = 'default') => {
    setTheme(themes[`${theme}`])
  }

  return (
    <ThemeContext.Provider value={{
      themes: Object.keys(themes),
      changeTheme: changeTheme,
      currentTheme: currentTheme
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider

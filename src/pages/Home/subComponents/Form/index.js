import React, { useState, useContext, useEffect } from 'react' // eslint-disable-line
import { useHistory } from 'react-router-dom';
import { Button, FormControl, InputLabel, Select, MenuItem, Grid, TextField, Paper, Typography, withStyles } from '@material-ui/core'
import { withScreenSize } from 'components/HOC'
import { DatePicker } from 'components'
import styles from './style'
import PropTypes from 'prop-types'
import { ThemeContext } from 'context'
import { connect } from 'react-redux'
import { addNote } from 'redux/actions'

const Form = ({ classes, screenSize, addNote }) => {

  const [selectedDate, setSelectedDate] = useState(new Date().toDateString())
  const [message, setMessage] = useState('')
  const [selectedTheme, setSelectedTheme] = useState('default')
  const [errorText, setErrorText] = useState(false)
  const { themes } = useContext(ThemeContext)
  const history = useHistory()

  const handleDateChange = (date) => {
    setSelectedDate(date.toDateString())
  }

  const handleThemeSelect = (event) => {
    setSelectedTheme(event.target.value)
  }

  const handleMessageChange = (event) => {
    if (event.target.value.length > 0) {
      setErrorText(false)
    }
    setMessage(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (message !== '') {
      addNote({
        date: selectedDate,
        message: message,
        theme: selectedTheme
      })
      history.push('/note')
    }
    else setErrorText(true)
  }

  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={3}>
        <Grid item xs={12} sm={12} md={6}>
          <Paper elevation={3} className={classes.form}>
            <form>
            <Typography 
              variant="h3" 
              gutterBottom
              className={classes.title}
            >
              Note to self
            </Typography>
            <DatePicker
              selectedDate={selectedDate}
              setSelectedDate={handleDateChange}
            />
            <TextField
              id="outlined-textarea"
              label="Message"
              placeholder="Message"
              multiline
              variant="outlined"
              className={classes.form_text}
              value={message}
              onChange={handleMessageChange}
              required
              error={errorText}
              helperText="Message is required"
            />
            <FormControl variant="outlined" className={classes.theme_select}>
              <InputLabel id="demo-simple-select-outlined-label">Theme</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={selectedTheme}
                onChange={handleThemeSelect}
                label="Theme"
                required
              >
                {themes.map(theme => {
                  return (
                    <MenuItem value={theme}>{theme}</MenuItem>
                  )
                })}
              </Select>
            </FormControl>
            <Button 
              className={classes.submit} 
              variant="contained" 
              color="primary"
              onClick={handleSubmit}
              type="submit"
            >
              Add Note
            </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

Form.propTypes = {
  classes: PropTypes.object
}

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
    addNote: (note) => dispatch(addNote(note))
})

//export default connect(mapStateToProps, mapDispatchToProps)(ManageWallets);

export default connect(mapStateToProps, mapDispatchToProps)(withScreenSize(withStyles(styles)(Form)))

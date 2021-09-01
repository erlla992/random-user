import React, { useState } from 'react'
import { Button, Grid } from '@material-ui/core'
import {
  AlertMessage,
  LoadingModal,
  UserOverviewData,
  UserMainData,
} from './components'
import { defaultUserValues, assignUserFromApiData } from './models/'
import './App.css'
import { useStyles } from './App.styles'

const App = () => {
  const classes = useStyles()
  const apiURL = 'https://randomuser.me/api/'
  const [user, setUser] = useState(defaultUserValues)
  const [loadingData, setLoadingData] = useState(false)
  const [initialState, setInitialState] = useState(true)
  const [loadingError, setLoadingError] = useState(false)

  const fetchApiData = () => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => {
        setInitialState(false)
        setLoadingData(false)
        setUser(assignUserFromApiData({ apiData: data.results[0] }))
      })
      .catch(handleApiError)
  }

  const handleClick = () => {
    setLoadingData(true)
    setTimeout(fetchApiData, 800)
  }

  const handleApiError = () => {
    setLoadingData(false)
    setLoadingError(true)
  }

  const handleClose = (): void => {
    setLoadingError(false)
  }

  return (
    <div className="App">
      <Grid container className={classes.root}>
        <Grid item md={1}></Grid>
        <Grid item md={3} className={classes.overview}>
          {initialState ? (
            <h2>User overview</h2>
          ) : (
            <UserOverviewData
              name={user.titleAndName}
              imageUrl={user.userImageUrl}
              phone={user.phone}
              cell={user.cell}
              email={user.email}
            />
          )}
        </Grid>
        <Grid item md={6}>
          <h1 className={classes.header}>
            Random user
            <Button
              className={classes.loadButton}
              variant="contained"
              color="primary"
              onClick={handleClick}
            >
              Load user
            </Button>
          </h1>
          <UserMainData
            gender={user.gender}
            dateOfBirth={user.dateOfBirth}
            address={user.address}
            nationality={user.nationality}
            registred={user.registred}
            username={user.username}
            uuid={user.uuid}
          />
        </Grid>
      </Grid>
      {loadingData && <LoadingModal />}
      {loadingError && (
        <AlertMessage
          message={'Something went wrong when fetching user data'}
          handleClose={handleClose}
        />
      )}
    </div>
  )
}

export default App

import React from 'react'
import styles from './home.scss'
import Profile from 'containers/profile/profileContainer'

class HomeRoute extends React.Component {
  render () {
    return (
      <div className={styles.homeRoute}>
        <h1>Hello World!</h1>
        <p>This is the Home Route</p>
        <Profile />
      </div>
    )
  }
}

export default HomeRoute

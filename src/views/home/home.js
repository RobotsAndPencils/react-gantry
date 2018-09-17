import React from 'react'
import styles from './home.scss'
import Profile from 'containers/profile/profileContainer'

class HomeRoute extends React.Component {
  render () {
    return (
      <div className={styles.homeRoute}>
        <header>
          <h1>Hello World!</h1>
          <p>This is the Home Route</p>
        </header>
        <Profile />
      </div>
    )
  }
}

export default HomeRoute

import React from 'react'
import styles from './home.scss'

class HomeRoute extends React.Component {
  render () {
    return (
      <div className={styles.homeRoute}>
        <h1>Hello World!</h1>
        <p>This is the Home Route</p>
      </div>
    )
  }
}

export default HomeRoute

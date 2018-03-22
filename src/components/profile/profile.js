import React from 'react'
import styles from './profile.scss'
import crown from '../../assets/svg/crown.svg'
import Crown from '../../assets/svg/crown.svg?inline'

class Profile extends React.Component {
  render () {
    return (
      <div className={styles.profile}>
        <p><Crown className={styles.crownBlue} /> Andrew's Profile! <img src={crown} className={styles.crown} /></p>

      </div>
    )
  }
}

export default Profile

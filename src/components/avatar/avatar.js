import React from 'react'
import PropTypes from 'prop-types'
import styles from './avatar.scss'

export default function Avatar (props) {
  if (props.name) {
    return (
      <img className={styles.avatar} src={`https://robohash.org/${props.name}${props.set ? '?set=set' + props.set : ''}`} />
    )
  } else {
    return false
  }
}

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  set: PropTypes.number
}

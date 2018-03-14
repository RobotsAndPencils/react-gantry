import React from 'react'
import PropTypes from 'prop-types'
import styles from './avatar.scss'

export default function Avatar (props) {
  return (
    <img className={styles.avatar} src={`https://robohash.org/${props.name}${props.set ? '?set=set' + props.set : ''}`} />
  )
}

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  set: PropTypes.number
}

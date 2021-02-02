import React from 'react'
// import PropTypes from 'prop-types'
import styling from './tempComponent.module.scss'

const TempComponent = props => {
  return (
    <div className={styling.temp}>
      <img alt='react gantry' src={require('../../gantry.png').default} />
    </div>
  )
}

TempComponent.propTypes = {}

export default TempComponent

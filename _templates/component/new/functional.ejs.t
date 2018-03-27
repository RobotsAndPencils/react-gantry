---
to: "<%= locals.functional ? 'src/components/' + h.inflection.camelize(name, true) + '/' + h.inflection.camelize(name, true) + '.js' : null %>"
---

import React from 'react'
import PropTypes from 'prop-types'
import styles from './<%= h.inflection.dasherize(name) %>.scss'

function <%= h.inflection.camelize(name) %> (props) {
  return (
    <div className={styles.<%= h.inflection.camelize(name, true) %>Wrapper}>
      Your Shiny New Functional Component!
    </div>
  )
}

<%= h.inflection.camelize(name) %>.propTypes = {
}

export default <%= h.inflection.camelize(name) %>

---
to: "<%= locals.functional ? null : 'src/components/' + h.inflection.camelize(name, true) + '/' + h.inflection.camelize(name, true) + '.js'  %>"
---

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './<%= h.inflection.dasherize(h.inflection.underscore(name)) %>.scss'

class <%= h.inflection.camelize(name) %> extends Component {
  render () {
    return (
      <div className={styles.<%= h.inflection.camelize(name, true) %>Wrapper}>
        Your Shiny New Component!
      </div>
    )
  }
}

<%= h.inflection.camelize(name) %>.propTypes = {
}

export default <%= h.inflection.camelize(name) %>

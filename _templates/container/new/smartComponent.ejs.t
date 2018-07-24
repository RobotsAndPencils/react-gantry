---
to: src/containers/<%= h.inflection.camelize(name, true) %>/<%= h.inflection.camelize(name, true) %>Container.js
---
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
<% if(locals.duck){ -%>
import <%= duck %>Actions from '../../redux/<%= duck %>/<%= duck %>Actions'
<% }else{ -%>
import duckActions from '../../redux/duck/duckActions'
<% } -%>
import styles from './<%= h.inflection.dasherize(h.inflection.underscore(name)) %>-container.scss'

<% if(locals.functional){ -%>
function <%= h.inflection.camelize(name) %> (props) {
  return (
    <div className={styles.<%= h.inflection.camelize(name, true) %>Wrapper}>
      Your Shiny New Functional Container!
    </div>
  )
}
<% } else { -%>
export class <%= h.inflection.camelize(name) %> extends React.Component {
  render () {
    return (
      <div className={styles.<%= h.inflection.camelize(name, true) %>Wrapper}>
        Your Shiny New Container!
      </div>
    )
  }
}
<% } -%>

<%= h.inflection.camelize(name) %>.propTypes = {
  distance: PropTypes.number
}

<% if(locals.document){ -%>
/**
 * Maps individual bits of state from redux to props that
 * our contained component can access.
 *
 * @param {Object} state `connect` supplies us with the entire state object
 * @param {Object} ownProps
 */
<% } -%>
const mapStateToProps = (state, ownProps) => ({
<% if(locals.duck){ -%>
  distance: state.<%= duck %>.distance
<% }else{ -%>
  distance: state.duck.distance
<% } -%>
})

<% if(locals.document){ -%>
/**
 * Maps redux action dispatches to props that our contained component
 * can use. Accepts both an Object or a Function.
 * If an Object, all entries are automatically wrapped in dispatch
 * If a function the parameters provided are:
 *
 * @param {any} dispatch `connect` supplies us with dispatch so we can call redux actions
 * @param {Object} ownProps
 */
<% } -%>
const mapDispatchToProps = {
  quack: <% locals.duck ? locals.duck + 'Actions.simpleQuack' : 'duckActions.simpleQuack' %>
}

export default connect(mapStateToProps, mapDispatchToProps)(<%= h.inflection.camelize(name) %>)

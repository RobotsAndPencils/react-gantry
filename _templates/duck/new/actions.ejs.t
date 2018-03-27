---
to: src/redux/<%= h.inflection.camelize(name, true) %>/<%= h.inflection.camelize(name, true) %>Actions.js
---
<% if(locals.document){ -%>
/* ACTION TYPE CONSTANTS
You can use any convention you wish here, but the name should remain UPPER_SNAKE_CASE for consistency.
*/
<% } -%>
<% if(locals.dummy){ -%>
const QUACK = 'exampleApp/<%= h.inflection.camelize(name, true) %>/QUACK'

<% } -%>
export const types = {
<% if(locals.dummy){ -%>
  QUACK
<% } -%>
}

<% if(locals.document){ -%>
/* ACTION CREATOR FUNCTIONS
Put here the functions that return an action object that can be dispatched
HINT: Always use functions for consistency, don't export plain objects
*/
<% } -%>
<% if(locals.dummy){ -%>
const quack = (payload) => ({
  type: types.QUACK,
  payload: payload
})

<% } -%>
export const actionCreators = {
<% if(locals.dummy){ -%>
  quack
<% } -%>
}

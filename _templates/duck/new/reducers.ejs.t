---
to: src/redux/<%= h.inflection.camelize(name, true) %>/<%= h.inflection.camelize(name, true) %>Reducer.js
---
<% if(locals.document){ -%>
/* REDUCER(S)
It's a good practice to define your state shape first.
Based on the state shape, multiple reducers might be defined in this file, combined and exported into a single reducer function.
*/
<% } -%>
import {types} from './<%= h.inflection.camelize(name, true) %>Actions'

/* State Shape
{
<% if(locals.dummy){ -%>
  quacking: bool
<% } -%>
}
*/

const initialState = {
<% if(locals.dummy){ -%>
  quacking: false
<% } -%>
}

export const <%= h.inflection.camelize(name, true) %>Reducer = (state = initialState, action) => {
  switch (action.type) {
<% if(locals.dummy){ -%>
    case types.QUACK:
      return {
        ...state,
        quacking: action.payload
      }
<% } -%>
    default:
      return state
  }
}

---
to: src/redux/<%= h.inflection.camelize(name, true) %>/index.js
---
<% if(locals.document){ -%>
/* INDEX FILE
This file, from a module perspective, behaves almost as the duck file form the original proposal.
It exports as default the reducer function of the duck.
It exports the named actionCreators for dispatch use.
Optionally it exports the types if they are needed in other ducks.
*/
<% } -%>

import {types, actionCreators} from './<%= h.inflection.camelize(name, true) %>Actions'
import {<%= h.inflection.camelize(name, true) %>Reducer} from './<%= h.inflection.camelize(name, true) %>Reducer'

export {
  types,
  actionCreators
}

export default <%= h.inflection.camelize(name, true) %>Reducer

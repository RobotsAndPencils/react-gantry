---
inject: true
to: src/redux/rootReducer.js
after: import {combineReducers}
skip_if: import <%= h.inflection.camelize(name, true) %>
---
import <%= h.inflection.camelize(name, true) %> from './<%= h.inflection.camelize(name, true) %>'
---
inject: true
to: src/redux/rootReducer.js
after: import {combineReducers}
skip_if: import <%= h.inflection.camelize(name, true) %>Reducer
---
import <%= h.inflection.camelize(name, true) %>Reducer from './<%= h.inflection.camelize(name, true) %>/<%= h.inflection.camelize(name, true) %>Reducer'
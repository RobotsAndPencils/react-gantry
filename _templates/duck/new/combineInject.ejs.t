---
inject: true
to: src/redux/rootReducer.js
after: combineReducers\({
skip_if: <%= h.inflection.camelize(name, true) %>Reducer,
---
  <%= h.inflection.camelize(name, true) %>: <%= h.inflection.camelize(name, true) %>Reducer,
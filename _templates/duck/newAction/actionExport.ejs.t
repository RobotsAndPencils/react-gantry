---
inject: true
to: src/redux/<%= h.inflection.camelize(duck, true) %>/<%= h.inflection.camelize(duck, true) %>Actions.js
after: export const actionCreators = {
skip_if: \s<%= h.inflection.camelize(name, true) %>,
---
  <%= h.inflection.camelize(name, true) %>,
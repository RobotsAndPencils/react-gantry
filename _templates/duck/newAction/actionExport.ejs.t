---
inject: true
to: src/redux/<%= h.inflection.camelize(duck, true) %>/<%= h.inflection.camelize(duck, true) %>Actions.js
after: export default {
skip_if: \s\s<%= h.inflection.camelize(name, true) %>,
---
  <%= h.inflection.camelize(name, true) %>,
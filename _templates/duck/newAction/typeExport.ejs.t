---
inject: true
to: src/redux/<%= h.inflection.camelize(duck, true) %>/<%= h.inflection.camelize(duck, true) %>Actions.js
after: export const types = {
skip_if: \s\s<%= h.inflection.underscore(name).toUpperCase() %>,
---
  <%= h.inflection.underscore(name).toUpperCase() %>,
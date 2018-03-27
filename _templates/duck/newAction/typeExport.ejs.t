---
inject: true
to: src/redux/<%= h.inflection.camelize(duck, true) %>/<%= h.inflection.camelize(duck, true) %>Actions.js
after: export const types = {
skip_if: <%= h.inflection.underscore(name, true) %>,
---
  <%= h.inflection.underscore(name, true) %>,
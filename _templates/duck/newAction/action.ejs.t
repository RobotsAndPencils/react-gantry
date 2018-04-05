---
inject: true
to: src/redux/<%= h.inflection.camelize(duck, true) %>/<%= h.inflection.camelize(duck, true) %>Actions.js
before: export default {
skip_if: const <%= h.inflection.camelize(name, true) %> =
---
export const <%= h.inflection.camelize(name, true) %> = (payload) => ({
  type: types.<%= h.inflection.underscore(name).toUpperCase() %>,
  payload: payload
})

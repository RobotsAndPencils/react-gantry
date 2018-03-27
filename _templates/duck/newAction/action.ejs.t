---
inject: true
to: src/redux/<%= h.inflection.camelize(duck, true) %>/<%= h.inflection.camelize(duck, true) %>Actions.js
before: export const actionCreators = {
skip_if: const <%= h.inflection.camelize(name, true) %> = 
---
const <%= h.inflection.camelize(name, true) %> = (payload) => ({
  type: types.<%= h.inflection.underscore(name, true) %>,
  payload: payload
})
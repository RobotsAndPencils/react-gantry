---
inject: true
to: src/redux/<%= h.inflection.camelize(duck, true) %>/<%= h.inflection.camelize(duck, true) %>Reducer.js
after: export default
skip_if: types.<%= h.inflection.underscore(name, true) %>
---
  [types.<%= h.inflection.underscore(name).toUpperCase() %>]: (state, action) => {
    // Logic
    return {
      ...state
    }
  },
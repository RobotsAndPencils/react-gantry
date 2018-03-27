---
inject: true
to: src/redux/<%= h.inflection.camelize(duck, true) %>/<%= h.inflection.camelize(duck, true) %>Reducer.js
before: default
skip_if: types.<%= h.inflection.underscore(name, true) %>
---
    case types.<%= h.inflection.underscore(name, true) %>:
      // Logic
      return {
        ...state
      }
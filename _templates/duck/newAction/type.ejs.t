---
inject: true
to: src/redux/<%= h.inflection.camelize(duck, true) %>/<%= h.inflection.camelize(duck, true) %>Actions.js
before: export const types = {
skip_if: const <%= h.inflection.underscore(name).toUpperCase() %> =
---
const <%= h.inflection.underscore(name).toUpperCase() %> = 'exampleApp/<%= h.inflection.camelize(duck, true) %>/<%= h.inflection.underscore(name).toUpperCase() %>'
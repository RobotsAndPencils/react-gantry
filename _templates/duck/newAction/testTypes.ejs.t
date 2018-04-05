---
inject: true
to: src/redux/<%= h.inflection.camelize(duck, true) %>/<%= h.inflection.camelize(duck, true) %>.test.js
after: describe\('<%= h.inflection.titleize(h.inflection.humanize(h.inflection.underscore(duck))) %> types'
skip_if: it\('should create <%= h.inflection.camelize(name, true) %> action'
---
  it('should create <%= h.inflection.camelize(name, true) %> action', () => {
    const payloadSample = 'testing'
    expect(<%= h.inflection.camelize(duck, true) %>Actions.<%= h.inflection.camelize(name, true) %>(payloadSample))
      .toEqual({
        type: types.<%= h.inflection.underscore(name).toUpperCase() %>,
        payload: payloadSample
      })
  })
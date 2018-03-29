---
inject: true
to: src/redux/<%= h.inflection.camelize(duck, true) %>/<%= h.inflection.camelize(duck, true) %>Reducer.test.js
after: describe\('types'
skip_if: it\('should create <%= h.inflection.camelize(name, true) %> action'
---
  it('should create <%= h.inflection.camelize(name, true) %> action', () => {
    expect(actionCreators.<%= h.inflection.camelize(name, true) %>())
      .toEqual({
        type: types.<%= h.inflection.underscore(name).toUpperCase() %>,
        payload: undefined
      })
  })
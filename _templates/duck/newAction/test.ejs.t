---
inject: true
to: src/redux/<%= h.inflection.camelize(duck, true) %>/<%= h.inflection.camelize(duck, true) %>Reducer.test.js
after: describe\('<%= h.inflection.humanize(duck) %> Reducer'
skip_if: it\('should reduce <%= h.inflection.camelize(name, true) %>'
---
  it('should reduce <%= h.inflection.camelize(name, true) %>', () => {
    const <%= h.inflection.camelize(name, true) %> = actionCreators.<%= h.inflection.camelize(name, true) %>(payload)
    const initialState = {
      // initialState
    }
    const result = reducer(initialState, <%= h.inflection.camelize(name, true) %>)

    expect(result).toEqual({
      // expectedState
    })
  })
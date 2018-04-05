---
inject: true
to: src/redux/<%= h.inflection.camelize(duck, true) %>/<%= h.inflection.camelize(duck, true) %>.test.js
after: describe\('<%= h.inflection.titleize(h.inflection.humanize(h.inflection.underscore(duck))) %> Reducer'
skip_if: it\('should reduce <%= h.inflection.camelize(name, true) %>'
---
  it('should reduce <%= h.inflection.camelize(name, true) %>', () => {
    const payload = null
    const <%= h.inflection.camelize(name, true) %> = <%= h.inflection.camelize(duck, true) %>Actions.<%= h.inflection.camelize(name, true) %>(payload)
    const initialState = {
      // initialState
    }
    const result = <%= h.inflection.camelize(duck, true) %>Reducer(initialState, <%= h.inflection.camelize(name, true) %>)

    expect(result).toEqual({
      // expectedState
    })
  })
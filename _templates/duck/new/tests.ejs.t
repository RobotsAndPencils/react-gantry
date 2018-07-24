---
to: src/redux/<%= h.inflection.camelize(name, true) %>/<%= h.inflection.camelize(name, true) %>.test.js
---
<% if(locals.document){ -%>
/* TESTS FILE
You can test here all the different parts of the duck.
Most obvious is to start with the reducer and any selector functions which should be straight forward (pure functions)
*/
<% } -%>
import <%= h.inflection.camelize(name, true) %>Actions, {types} from './<%= h.inflection.camelize(name, true) %>Actions'
import <%= h.inflection.camelize(name, true) %>Reducer from './<%= h.inflection.camelize(name, true) %>Reducer'

describe('<%= h.inflection.titleize(h.inflection.humanize(h.inflection.underscore(name))) %> types', () => {
<% if(locals.dummy){ -%>
  it('should create quack action', () => {
    expect(<%= h.inflection.camelize(name, true) %>Actions.quack())
      .toEqual({
        type: types.QUACK,
        payload: undefined
      })
  })
<% } -%>
})

describe('<%= h.inflection.titleize(h.inflection.humanize(h.inflection.underscore(name))) %> Reducer', () => {
<% if(locals.dummy){ -%>
  it('should reduce quack', () => {
    const quack = <%= h.inflection.camelize(name, true) %>Actions.quack(true)
    const initialState = {
      quacking: false
    }
    const result = <%= h.inflection.camelize(name, true) %>Reducer(initialState, quack)
    expect(result).toEqual({
      quacking: true
    })
  })
<% } -%>
})

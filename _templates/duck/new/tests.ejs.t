---
to: src/redux/<%= h.inflection.camelize(name, true) %>/<%= h.inflection.camelize(name, true) %>Reducer.test.js
---
<% if(locals.document){ -%>
/* TESTS FILE
You can test here all the different parts of the duck.
Most obvious is to start with the reducer and any selector functions which should be straight forward (pure functions)
*/
<% } -%>
import reducer, {actionCreators, types} from './'

describe('types', () => {
<% if(locals.dummy){ -%>
  it('should create quack action', () => {
    expect(actionCreators.quack())
      .toEqual({
        type: types.QUACK,
        payload: undefined
      })
  })
<% } -%>
})

describe('<%= h.inflection.humanize(name) %> Reducer', () => {
<% if(locals.dummy){ -%>
  it('should reduce quack', () => {
    const quack = actionCreators.quack(true)
    const initialState = {
      quacking: false
    }
    const result = reducer(initialState, quack)

    expect(result).toEqual({
      quacking: true
    })
  })
<% } -%>
})

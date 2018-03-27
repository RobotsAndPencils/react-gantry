import reducer, {types, actionCreators} from './index'
import names from '../../constants/nameConstants'

describe('types', () => {
  it('should create randomName action', () => {
    expect(actionCreators.randomName())
      .toEqual({
        type: types.RANDOM_NAME,
        payload: undefined
      })
  })
})

describe('reducer', () => {
  it('should reduce randomName', () => {
    const randomName = actionCreators.randomName()
    const initialState = {}
    const result = reducer(initialState, randomName)
    expect(names.includes(result.name)).toBe(true)
  })
})

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
    const randomState = reducer({}, actionCreators.randomName())
    expect(names.includes(randomState.name)).toBe(true)
  })
})

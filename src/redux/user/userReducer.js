import createReducer from 'utils/createReducer'
import { types } from './userActions'

/* State Shape
{
  name: string
}
*/

const initialState = {
  name: ''
}

export default createReducer(initialState, {
  [types.RANDOM_NAME]: (state, action) => {
    return {
      ...state,
      name: action.payload
    }
  },
  [types.GET_SKILLS]: (state, action) => {
    return {
      ...state,
      skills: action.payload
    }
  }
})

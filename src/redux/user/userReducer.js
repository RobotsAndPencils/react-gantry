import {types} from './userActions'
import sampleNames from '../../constants/nameConstants'

/* State Shape
{
  name: string
}
*/

const initialState = {
  name: ''
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RANDOM_NAME:
      const randomNameNumber = Math.floor(Math.random() * sampleNames.length)
      return {
        ...state,
        name: sampleNames[randomNameNumber]
      }
    default:
      return state
  }
}

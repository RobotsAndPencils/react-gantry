import {combineReducers} from 'redux'
import profileReducer from './profile/profileReducer'
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
  profile: profileReducer,
  user: userReducer
})

export default rootReducer

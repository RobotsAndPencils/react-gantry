import {createStore} from 'redux'
import rootReducer from './rootReducer'

const configureStore = () => {
  return createStore(
    rootReducer,
    {}, // Initial State is handled by the individual reducers, but we could hydrate it here (i.e. from localStorage)
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // This only works without any other middleware. https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store
  )
}

export default configureStore

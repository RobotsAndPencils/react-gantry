import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './rootReducer'
import thunk from 'redux-thunk'

const configureStore = () => {
  const middlewares = [thunk] // to allow easy expansion
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const initialState = {} // Initial State is handled by the individual reducers, but we could hydrate it here (i.e. from localStorage)

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers( // to allow easy expansion
      applyMiddleware(...middlewares)
    )
  )
}

export default configureStore

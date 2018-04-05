import { axiosPublicInstance } from '../src/services/axiosInstance'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

// This sets the mock adapter on the axios instance
export const axiosMock = new MockAdapter(axiosPublicInstance)

// Creates a mock store
const middlewares = [thunk]
const storeWithMiddlewares = configureMockStore(middlewares)
export const mockStore = storeWithMiddlewares({})

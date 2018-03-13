import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import createStore from './redux/store'
import './styles/index.scss'
import HomeRoute from './views/home/home'

const store = createStore()

const AppRender = (props) => {
  return (
    <Provider store={store}>
      <HomeRoute />
    </Provider>
  )
}

ReactDOM.render(
  <AppRender />,
  document.getElementById('root')
)

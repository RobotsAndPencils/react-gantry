import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import createStore from './redux/store'
import './styles/index.scss'
import HomeRoute from './views/home/home'
import AboutView from './views/about/about'
import NoMatch from './views/nomatch/nomatch'

const store = createStore()

const AppRender = props => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/about' component={AboutView} />
          <Route path='/' exact component={HomeRoute} />
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.render(<AppRender />, document.getElementById('root'))

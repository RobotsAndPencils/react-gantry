import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import HomeRoute from '../home/home'
import AboutView from '../about/about'

const NoMatch = () => (
  <Router>
    <div>
      <h1>404 - We can't find that page.</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About page</Link>
        </li>
      </ul>
      <Switch>
        <Route path='/' exact component={HomeRoute} />
        <Route path='/about' component={AboutView} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
)

export default NoMatch

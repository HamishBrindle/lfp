import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import './style.css';

import Navigation from '../../components/Navigation'
import Landing from '../Landing'
import Login from '../Login'
import Register from '../Register'
import NotFound from '../../components/NotFound'

class App extends Component {

  render() {
    return (
      <div>
        
        <Navigation />
        <main role="main">
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route path="*" component={NotFound} />
          </Switch>
        </main>
       
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import Landing from './Landing'
import NotFound from './NotFound'

// import PropTypes from 'prop-types'

export class Main extends Component {

  // TODO: PropTypes is like type checking; we'll do this later
  // static propTypes = {
  //   prop: PropTypes
  // }

  render() {
    return (
      <main role="main">
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
    )
  }

}

/*
 * Redux...
 */

const mapStateToProps = (state = [], props) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Main)
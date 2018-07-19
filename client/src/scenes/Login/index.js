import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './style.css'

export class Login extends Component {

//   static propTypes = {
//     prop: PropTypes
//   }

  render() {
    return (
      <div>
        Login
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

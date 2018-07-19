import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import './style.css'

// import PropTypes from 'prop-types'

export class Navigation extends Component {

//   static propTypes = {
//     prop: PropTypes
//   }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">LFP</a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbar">
                        <ul className="navbar-nav mr-auto">

                            {/* Adding more here will fuck up the CSS, gotta redo */}
                            <li className="nav-item-left">
                                <NavLink to='/'>Home</NavLink>
                            </li>

                            <li className="nav-item-right">
                                <NavLink to='/login'>Login</NavLink>
                            </li>

                            <li className="nav-item-right">
                                <NavLink to='/register'>Register</NavLink>
                            </li>

                            <li className="nav-item-right">
                                <NavLink to='/logout'>Logout</NavLink>
                            </li>
                    
                        </ul>

                    </div>
                </nav>
            </div>
        )
    }
}


/*
 * Redux ...
 */

const mapStateToProps = (state) => ({
    // ...
})

const mapDispatchToProps = (dispatch) => ({
    // ...
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)


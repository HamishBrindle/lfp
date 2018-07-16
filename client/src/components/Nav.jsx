import React, { Component } from 'react'
import { connect } from 'react-redux'

// import PropTypes from 'prop-types'

export class Nav extends Component {

//   static propTypes = {
//     prop: PropTypes
//   }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">LFP</a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample04">
                        <ul className="navbar-nav mr-auto">

                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
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

export default connect(mapStateToProps, mapDispatchToProps)(Nav)


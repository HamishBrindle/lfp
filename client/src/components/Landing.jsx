import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addProject, callApi } from '../redux/actions'

import '../styles/Landing.css'

// import PropTypes from 'prop-types'

export class Landing extends Component {

    // static propTypes = {
    //     prop: PropTypes
    // }

    constructor(props) {
        super(props);

        this.callApi = this.callApi.bind(this)
        this.addProject = this.addProject.bind(this)

        this.state = {
            payload: {},
            callComplete: false
        }
    }

    addProject = () => {
        this.props.addProject(
            { name: 'ProjectName' }, // A test object that would contain project info from form
            'Hamish' // Name of submitter, don't need this except to demonstrate I guess...
        )
    }

    callApi = () => {
        this.setState({ callComplete: false })
        this.props.callApi()
    }

    componentDidUpdate() {
        if (this.props.payload.length > 0 && !this.state.callComplete) {
            this.setState({ 
                payload: JSON.stringify(this.props.payload, null, 2), 
                callComplete: true 
            })
        }
    }

    render() {

        return (
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <h1 className="display-3">Looking For Project</h1>
                        <p>
                            A platform for like-minded developers to connect and share ideas on Open Source projects!
                        </p>
                        <p>
                            <button onClick={this.callApi} className="btn btn-primary btn-lg">
                                Test API
                            </button>
                        </p>
                    </div>
                </div>
                <div className='container'>
                    {this.state.callComplete && (
                        <div>
                            <h3>Response From Server</h3>
                            <pre className="response-block">{this.state.payload}</pre>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state = [], props) => ({
    payload: state.test
})

const mapDispatchToProps = (dispatch) => ({
    addProject: (project, user) => {
        dispatch(addProject(project, user))
    },
    callApi: () => {
        dispatch(callApi())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing)

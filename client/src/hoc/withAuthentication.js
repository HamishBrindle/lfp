import React from 'react';
import { connect } from 'react-redux';
import { authUserSet } from '../redux/actions'

import { firebase } from '../firebase';

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      const { onSetAuthUser } = this.props;

      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? onSetAuthUser(authUser)
          : onSetAuthUser(null);
      });
    }

    render() {
      return (
        <Component />
      );
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    onSetAuthUser: (authUser) => dispatch(authUserSet(authUser))
  });

  return connect(null, mapDispatchToProps)(WithAuthentication);
}

export default withAuthentication;
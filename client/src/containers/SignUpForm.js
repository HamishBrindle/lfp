import { connect } from 'react-redux'
import SignUpForm from '../components/SignUpForm'
import { emailSignUp } from '../redux/actions'

const mapStateToProps = (state) => ({
  errorSignUp: state.sessionState.errorSignUp
});

const mapDispatchToProps = (dispatch) => ({
  onEmailSignUp: (email, password, username) => dispatch(emailSignUp(email, password, username))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
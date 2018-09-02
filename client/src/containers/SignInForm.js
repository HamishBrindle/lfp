import { connect } from 'react-redux'
import SignInForm from '../components/SignInForm'
import { githubLogin, emailLogin } from '../redux/actions'

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  onGithubLogin: () => dispatch(githubLogin()),
  onEmailLogin: (email, password) => dispatch(emailLogin(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
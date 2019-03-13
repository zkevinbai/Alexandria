import { connect } from 'react-redux';
import SignupForm from './SignupForm';
import { signup, login } from '../../actions/sessionActions';

const mstp = state => ({
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
})

const mdtp = dispatch => ({
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user))
})

export default connect(mstp, mdtp)(SignupForm)
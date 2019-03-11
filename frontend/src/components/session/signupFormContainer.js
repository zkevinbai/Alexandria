import { connect } from 'react-redux';
import SignupForm from './SignupForm';
import { signup } from '../actions/sessionActions';

const mstp = state => ({
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
})

const mstp = state => ({
    signup: user => dispatchEvent(signup(user))
})

export default connect(mstp, mdtp)(SignupForm)
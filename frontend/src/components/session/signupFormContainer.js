import { connect } from 'react-redux';
import SignupForm from './SignupForm';
import { signup } from '../../actions/sessionActions';

const mstp = state => ({
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
})

const mdtp = dispatch => ({
    signup: user => dispatch(signup(user))
})

export default connect(mstp, mdtp)(SignupForm)
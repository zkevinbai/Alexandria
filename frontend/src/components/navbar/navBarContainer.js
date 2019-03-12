import { connect } from 'react-redux';
import NavBar from './NavBar';

const mstp = state => ({
  signedIn: state.session.isSignedIn,
  errors: state.errors.session
})

const mdtp = dispatch => ({
})

export default connect(mstp, mdtp)(NavBar);
import { connect } from 'react-redux';
import NavBar from './NavBar';

const mstp = state => ({
  signedIn: state.session.isAuthenticated,
})

const mdtp = dispatch => ({
})

export default connect(mstp, mdtp)(NavBar);
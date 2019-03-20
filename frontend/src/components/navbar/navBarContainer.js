import { connect } from 'react-redux';
import NavBar from './NavBar';

const mstp = state => ({
  session: state.session
})

const mdtp = dispatch => ({
})

export default connect(mstp, mdtp)(NavBar);
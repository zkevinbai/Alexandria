import { connect } from 'react-redux';
import { logout } from '../../actions/sessionActions';
import LogoutButton from './LogoutButton';

const mstp = (state) => ({
    errors: state.errors.session,
})

const mdtp = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mstp, mdtp)(LogoutButton)
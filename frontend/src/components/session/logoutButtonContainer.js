import { connect } from 'react-redux';
import { logout } from '../../actions/sessionActions';
import LogoutButton from './LogoutButton';
import { withRouter } from 'react-router-dom';

const mstp = (state) => ({
    errors: state.errors.session,
})

const mdtp = dispatch => ({
    logout: () => dispatch(logout())
})

export default withRouter(connect(mstp, mdtp)(LogoutButton));
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { login } from '../../actions/sessionActions'

const mstp = state => ({
    errors: state.errors.session
})

const mdtp = dispatch => ({
    login: user => dispatch(login(user))
})

export default connect(mstp, mdtp)(LoginForm)
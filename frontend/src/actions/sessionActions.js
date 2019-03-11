import * as ApiUtil from '../util/sessionApiUtil';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'
export const RECEIVE_USER_LOGOUT = 'RECEIVE_USER_LOGOUT';
export const RECEIVE_USER_LOGIN = 'RECEIVE_USER_LOGIN';

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
})

export const receiveUserLogin = () => ({
    type: RECEIVE_USER_LOGIN
})

export const signup = user => dispatch => (
    ApiUtil.signup(user).then(() => (
        dispatch(receiveUserLogin())
    ), err => (
        dispatch(receiveErrors(err.response.data))
    ))
)

export const login = user => dispatch => (
    ApiUtil.login(user).then(res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        ApiUtil.setAuthToken = jwt_decode(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded))
    })
    .catch(err => {
        dispatch(receiveErrors(err.response.data));
    })
)

export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken')
    ApiUtil.setAuthToken(false)
    dispatch(logoutUser())
}
import { RECEIVE_CURRENT_USER, RECEIVE_USER_LOGIN, RECEIVE_USER_LOGOUT } from '../actions/sessionActions';

const sessionReducer = (state={}, action) => {
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return xxx;
        case RECEIVE_USER_LOGIN:
            return xxx;
        case RECEIVE_USER_LOGOUT:
            return xxx;
        default:
            return state;
    }
}

export default sessionReducer
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root.jsx';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/sessionApiUtil';
import { logout, logoutUser } from './actions/sessionActions';


document.addEventListener('DOMContentLoaded', () => {
    let store;

    if (localStorage.jwtToken) {
        setAuthToken(localStorage.jwtToken);

        const decodedUser = jwt_decode(localStorage.jwtToken);
        const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

        store = configureStore(preloadedState);

        const currentTime = Date.now() / 1000;

        if (decodedUser.exp < currentTime) {
            store.dispatch(logout());
            window.location.href = '/login';
        }
    } else {
        store = configureStore({});
    }

    window.getState = store.getState
    window.dispatch = store.dispatch
    window.logout = logout


    ReactDOM.render(<Root store={store} />, document.getElementById('root'));
})


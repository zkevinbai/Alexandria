import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root.jsx';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/sessionApiUtil';
import { logout } from './actions/sessionActions';
import {narrowSearchResults, parseSingleRec} from './util/searchParseUtil';
import { queryGoogleBooks, queryGoogleBook} from './actions/bookActions';

import * as BookApiUtil from './util/bookApiUtil';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    const root = document.getElementById('root');

    if (localStorage.jwtToken) {
        setAuthToken(localStorage.jwtToken);

        const decodedUser = jwt_decode(localStorage.jwtToken);
        const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

        store = configureStore(preloadedState);

        const currentTime = Date.now() / 1000;

        if (decodedUser.exp < currentTime) {
            store.dispatch(logout());
            // window.location.href = '/login';
        }
    } else {
        store = configureStore({});
    }

    // #########################################################################
    // --------------------------TESTING START------------------------------
    // Window Actions ----------------------------------------------------------
    //* Book Actions -------------------------------------------------------
    window.queryBooks = BookApiUtil.queryBooks;
    window.queryBook = BookApiUtil.queryBook;
    window.narrowSearchResults = narrowSearchResults;
    window.queryAuthor = BookApiUtil.queryAuthor;
    window.parseRec = parseSingleRec;

    window.queryGoogleBooks = queryGoogleBooks;
    window.queryGoogleBook = queryGoogleBook;
    // Window Store ------------------------------------------------------------
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
        // --------------------------TESTING END-----qy---------------------------
    // #########################################################################

    ReactDOM.render(
        <Root store={store} />,
        root
    );
});



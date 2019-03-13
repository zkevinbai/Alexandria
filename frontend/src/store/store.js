import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import RootReducer from '../reducers/rootReducer';

// const configureStore = (preloadedState = {}) => (
//     createStore(
//         RootReducer,
//         preloadedState,
//         applyMiddleware(thunk, logger)
//     )
// );

// export default configureStore;

const configureStore = (preloadedState = {}) => {
    let middleware = [thunk];
    if (process.env.NODE_ENV !== 'production') {
        middleware = [...middleware, logger];
    }
    return createStore(
        RootReducer,
        preloadedState,
        applyMiddleware(...middleware)
    );
};
export default configureStore;
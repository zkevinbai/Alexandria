import { combineReducers } from 'redux';
import session from './sessionReducer';
import books from './booksReducer';

const RootReducer = combineReducers({
    session,
    books
});

export default RootReducer;
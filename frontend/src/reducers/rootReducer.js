import { combineReducers } from 'redux';
import session from './sessionReducer';
import books from './booksReducer';
import search from './searchReducer';

const RootReducer = combineReducers({
    session,
    books, 
    search
});

export default RootReducer;
import {
    RECEIVE_BOOKS,
    RECEIVE_BOOK,
    REMOVE_BOOK
} from '../actions/bookActions';

const booksReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch(action.type) {
        case RECEIVE_BOOKS:
            newState = action.books.data;
            return newState;

        case RECEIVE_BOOK:
            newState[action.book.data.id] = action.book.data;
            return newState;

        case REMOVE_BOOK:
            delete newState(action.book.id);
            return newState;

        default:
            return oldState;
    }
};

export default booksReducer;
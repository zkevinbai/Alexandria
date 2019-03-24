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
            let changeState = {};
            action.books.forEach(book => {
                changeState[book._id] = book;
            });
            return changeState;

        case RECEIVE_BOOK:
            newState[action.book._id] = action.book;
            return newState;

        case REMOVE_BOOK:
            let changedState = {};
            let shelf = Object.keys(newState);

            for (let i = 0; i < shelf.length; i++) {
                if (shelf[i] === action.bookId) continue;
                changedState[shelf[i]] = newState[shelf[i]];
            }
            return changedState;

        default:
            return oldState;
    }
};

export default booksReducer;
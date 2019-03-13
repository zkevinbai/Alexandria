import {
    SEARCH_BOOKS,
    CLEAR_SEARCH
} from '../actions/bookActions';

const searchReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case SEARCH_BOOKS:
            newState = action.books;
            return newState;

        case CLEAR_SEARCH:
            return [];

        default:
            return oldState;
    }
};

export default searchReducer;
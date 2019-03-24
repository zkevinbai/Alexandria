import {
    SEARCH_BOOKS,
    CLEAR_SEARCH,
} from '../actions/bookActions';

const searchResultsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    // let newState = Object.assign({}, oldState);

    switch (action.type) {
        case SEARCH_BOOKS:
            return action.books
        case CLEAR_SEARCH:
            return {};

        default:
            return oldState;
    }
};

export default searchResultsReducer;
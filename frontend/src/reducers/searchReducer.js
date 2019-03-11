import {
    SEARCH_BOOKS
} from '../actions/bookActions';

const searchReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case SEARCH_BOOKS:
            newState = action.books.data;
            return newState;

        default:
            return oldState;
    }
};

export default searchReducer;
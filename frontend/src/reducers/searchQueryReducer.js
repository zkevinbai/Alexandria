import {
    RECEIVE_QUERY, CLEAR_SEARCH
} from '../actions/bookActions';

const searchQueryReducer = (oldState = "", action) => {
    Object.freeze(oldState);
    // let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_QUERY:
            return action.query;
        case CLEAR_SEARCH:
            return "";
        default:
            return oldState;
    }
};

export default searchQueryReducer;
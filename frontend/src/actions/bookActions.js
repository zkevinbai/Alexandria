import {
    queryBooks,
    getBooks,
    addBook,
    deleteBook
} from '../util/bookApiUtil';

import { narrowSearchResults } from '../util/searchParseUtil';

// Constants
export const SEARCH_BOOKS = "SEARCH_BOOKS";
export const CLEAR_SEARCH = "CLEAR_SEARCH";

export const RECEIVE_BOOKS = "RECEIVE_BOOKS";
export const RECEIVE_BOOK = "RECEIVE_BOOK";
export const REMOVE_BOOK = "RECEIVE_BOOK";

// Action Creators
export const searchBooks = (books) => ({
    type: SEARCH_BOOKS,
    books
});

export const clearSearch = () => ({
    type: CLEAR_SEARCH
});

export const receiveBooks = (books) => ({
    type: RECEIVE_BOOKS,
    books
});

export const receiveBook = (book) => ({
    type: RECEIVE_BOOK,
    book
});

export const removeBook = (book) => ({
    type: REMOVE_BOOK,
    book
});

// Thunk Action Creators
export const queryGoogleBooks = (queryString) => (dispatch) => {
    return queryBooks(queryString)
        .then( resData => dispatch(searchBooks(narrowSearchResults(resData))) )
        .catch( resErr => console.log(resErr) )
};

export const fetchUserBooks = (userId) => (dispatch) => (
    getBooks(userId)
        .then( resBooks => dispatch(receiveBooks(resBooks)) )
        .catch( resErr => console.log(resErr) )
);

export const addUserBook = (data) => (dispatch) => (
    addBook(data)
        .then( resBook => dispatch(receiveBook(resBook)) )
        .catch( resErr => console.log(resErr) )
);

export const removeUserBook = (data) => (dispatch) => (
    deleteBook(data)
        .then( resBook => dispatch(removeBook(resBook)) )
        .catch( resErr => console.log(resErr) )
);

import {
    queryBooks,
    queryBook,
    getBooks,
    addBook,
    deleteBook,
    fetchBook
} from '../util/bookApiUtil';

import { narrowSearchResults } from '../util/searchParseUtil';
import { translateBook } from '../util/singleBookSearchParseUtil';

// Constants
export const SEARCH_BOOKS = "SEARCH_BOOKS";
export const SEARCH_BOOK = "SEARCH_BOOK";
export const CLEAR_SEARCH = "CLEAR_SEARCH";

export const RECEIVE_BOOKS = "RECEIVE_BOOKS";
export const RECEIVE_BOOK = "RECEIVE_BOOK";
export const REMOVE_BOOK = "RECEIVE_BOOK";

// Action Creators

    // Search Actions 
export const searchBooks = (books) => ({
    type: SEARCH_BOOKS,
    books
});

export const searchBook = (book) => ({
    type: SEARCH_BOOK,
    book
});

export const clearSearch = () => ({
    type: CLEAR_SEARCH
});

    // Book Actions 
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

    // Search Actions 
export const queryGoogleBooks = (queryString) => (dispatch) => {
    return queryBooks(queryString)
        .then( resData => dispatch(searchBooks(narrowSearchResults(resData))) )
        .catch( resErr => console.log(resErr) );
};

export const queryGoogleBook = (queryBookId) => (dispatch) => {
    return queryBook(queryBookId)
        .then(resBook => dispatch(searchBook(translateBook(resBook.volumeInfo))) )
        .catch( resErr => console.log(resErr) );
};

    // Book Actions 
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

export const fetchUserBook = bookId => (dispatch) => {
    return (
    fetchBook(bookId)
        .then( resBook => dispatch(receiveBook(resBook)))
        .catch( resErr => console.log(resErr) )
)};

export const removeUserBook = bookId => (dispatch) => (
    deleteBook(bookId)
        .then( resBook => dispatch(removeBook(resBook)) )
        .catch( resErr => console.log(resErr) )
);

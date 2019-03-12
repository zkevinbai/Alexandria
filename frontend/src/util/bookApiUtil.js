import axios from 'axios';

export const queryBooks = (queryString) => {

    return fetch(`https://www.googleapis.com/books/v1/volumes?q={${queryString}}`)
        .then( res => res.json())
        .then( json => ({data: json}) );
};

export const getBooks = (userId) => {
    return axios.get(`api/books/user/${userId}`);
};

export const addBook = (data) => {
    return axios.post(`api/books/user/${data.userId}`, data.book);
};

export const deleteBook = (data) => {
    return axios.post(`api/books/user/${data.userId}`, data.bookId);
};


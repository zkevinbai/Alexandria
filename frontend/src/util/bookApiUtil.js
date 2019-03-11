import axios from 'axios';

export const queryBooks = (queryString) => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q={${queryString}}`);
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


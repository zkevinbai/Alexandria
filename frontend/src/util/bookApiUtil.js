import axios from 'axios';

export const queryBooks = (queryString) => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q={${queryString}}&key=AIzaSyBr5Rk9pokZ0OI5EpKv3ah4JGpnUb3Dk6E`);
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


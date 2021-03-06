import axios from 'axios';

// Google Books Api

export const queryBooks = (queryString) => {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q={${queryString}}`)
        .then( res => res.json())
        .then( json => ({data: json}) );
};

export const queryBook = (queryBookId) => {
    return fetch(`https://www.googleapis.com/books/v1/volumes/${queryBookId}`)
        .then( res => res.json());
};

export const getBooks = (userId) => {
    return axios.get(`api/books/user/${userId}`);
};

export const fetchBook = (bookId) => {
    return axios.get(`api/books/${bookId}`);
};

export const addBook = (data) => {
    return axios.post(`api/books/user/${data.userId}`, data.book);
};

export const deleteBook = (bookId) => {
    return axios.delete(`api/books/${bookId}`);
};

export const queryAuthor = (queryParams) => {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=-${queryParams.title}+inauthor:{${queryParams.author}}`)
        .then(res => res.json())
        .then(json => ({ data: json }));
};



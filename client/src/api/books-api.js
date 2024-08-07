import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/books';


export const getAll = async () => {
    const result = await request.get(BASE_URL);

    const books = Object.values(result);


    return books;
}

export const getOne = (bookId) => request.get(`${BASE_URL}/${bookId}`);

export const create = (bookData) => request.post(`${BASE_URL}`, bookData);

const booksAPI = {
    getAll,
    getOne,
    create
};

export default booksAPI;
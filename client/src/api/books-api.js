import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/books';


export const getAll = async () => {
    const result = await request.get(BASE_URL);

    const books = Object.values(result);


    return books;
}

export const getOne = (bookId) => request.get(`${BASE_URL}/${bookId}`);

export const getLatest = async() => {
    const result = await request.get(BASE_URL);
}

export const create = (bookData) => request.post(`${BASE_URL}`, bookData);

export const remove = (bookId) => request.del(`${BASE_URL}/${bookId}`);

export const update = (bookId, bookData) => request.put(`${BASE_URL}/${bookId}`, bookData)
const booksAPI = {
    getAll,
    getOne,
    create,
    remove,
    update
};

export default booksAPI;
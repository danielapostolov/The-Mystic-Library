import * as request from './requester';

const BASE_URL = 'http://localhost:3030/jsonstore/books';


export const getAll = async () => {
    await request.get(BASE_URL);
} 
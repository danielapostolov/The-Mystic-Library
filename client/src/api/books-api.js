import * as request from './requester';

const BASE_URL = 'http://localhost:3030/jsonstore/books';


export const getAll = async () => {
    const result = await request.get(BASE_URL);
    
    const books = Object.values(result);
    

    return books;
} 
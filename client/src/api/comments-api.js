import requester from "./requester"


const BASE_URL = 'http://localhost:3030/jsonstore/books';

const buildUrl = (bookId) => `${BASE_URL}/${bookId}/comments`;

const create = async (bookId, username, text) => {
    const result = await requester.post(buildUrl(bookId), { username, text });
    return result;
}

const getAll = async (bookId) => {
    const result = await requester.get(buildUrl(bookId));

    const comments = Object.values(result);

    return comments;
}
export default {
    create,
    getAll
}
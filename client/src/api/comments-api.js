import requester from "./requester"


const BASE_URL = 'http://localhost:3030/data/comments';


const create = async (bookId, text) => {
    const result = await requester.post(BASE_URL, { bookId, text });
    return result;
}

const getAll = (bookId) => {
    const params = new URLSearchParams({
        where: `bookId="${bookId}"`,
        load:`author=_ownerId:users`
    });
    return requester.get(`${BASE_URL}?${params.toString()}`);
};


export default {
    create,
    getAll
}
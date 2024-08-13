import commentsAPI from '../api/comments-api';

import { useEffect, useState } from 'react';

export function useCreateComment() {
    const createHandler = (bookId, comment) => commentsAPI.create(bookId, comment);

    return createHandler;
}

export function useGetAllComments(bookId) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await commentsAPI.getAll(bookId);
            setComments(result);
        })();
    }, [bookId])

    return [comments, setComments];
}
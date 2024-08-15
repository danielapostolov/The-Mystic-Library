import commentsAPI from '../api/comments-api';

import { useEffect, useReducer} from 'react';

export function useCreateComment() {
    const createHandler = (bookId, comment) => commentsAPI.create(bookId, comment);

    return createHandler;
}

function commentsReducer(state, action) {
    switch (action.type) {
        case 'GET_ALL':
            return action.payload.slice();
        case 'ADD_COMMENT':
            return [...state, action.payload]
        default:
            return state;
    }
}

export function useGetAllComments(bookId) {
    const [comments, dispatch] = useReducer(commentsReducer, []);
    // const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await commentsAPI.getAll(bookId);
            dispatch({ type: 'GET_ALL', payload: result });
        })();
    }, [bookId])

    return [comments, dispatch];
}
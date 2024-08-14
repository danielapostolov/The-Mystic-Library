import { useEffect, useState } from 'react';
import booksAPI from '../api/books-api';


export function useGetAllBooks() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        (async () => {
            const result = await booksAPI.getAll();
            setBooks(result);
        })();
    }, []);

    return [books, setBooks];
}

export function useGetOneBooks(bookId) {
    const [book, setBook] = useState({});

    useEffect(() => {
        (async () => {
            const result = await booksAPI.getOne(bookId);
            setBook(result);
        })();
    }, [bookId]);

    return [book, setBook];

}
export function useCreateBooks() {
    const bookCreateHandler = (bookData) => booksAPI.create(bookData);

    return bookCreateHandler;
}

export function useDeleteGame(gameId) {

}
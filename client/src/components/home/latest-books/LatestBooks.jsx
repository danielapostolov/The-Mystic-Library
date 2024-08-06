import { useEffect, useState } from "react";

import HomeBookCard from "./home-book-card/HomeBookCard";

import booksAPI from "../../../api/books-api";


export default function LatestBooks() {
    const [latestBooks, setLatestBooks] = useState([])

    useEffect(() => {
        (async () => {
            const result = await booksAPI.getAll();
            setLatestBooks(result.reverse().slice(0,3));
        })();
    }, []);

    return (
        <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 ">
            <h2 className="text-4xl font-extrabold tracking-tight text-white">Latest books</h2>

            {latestBooks.length > 0
                ? <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {latestBooks.map((latestBook) => <HomeBookCard key={latestBook._id} {...latestBook} />)}
                </div>
                : <h2 className="text-2xl font-semibold text-center">No articles yet</h2>
            }
        </div>
    );
}
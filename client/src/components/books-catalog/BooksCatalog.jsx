import { useGetAllBooks } from '../../hooks/useBooks';
import BookCatalogCard from './book-catalog-card/BookCatalogCard';


export default function BookCatalog() {
    const [books] = useGetAllBooks();

    return (
        <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-white">Book Catalog</h2>

            {books.length > 0
                ? <div className="mt-6 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {books.map((book) => <BookCatalogCard key={book._id} {...book} />)}
                </div>
                : <h2 className="text-2xl font-semibold text-center pt-64">No articles yet</h2>
            }
        </div>
    );
}
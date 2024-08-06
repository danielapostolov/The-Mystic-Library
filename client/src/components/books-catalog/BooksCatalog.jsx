import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from '../../api/books-api';


export default function BookCatalog() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    BooksAPI.getAll()
      .then(result => setBooks(result));
  }, [])

  const data = [
    {
      id: 1,
      title: 'The Great Gatsby',
      subtitle: 'A Novel',
      author: 'F. Scott Fitzgerald',
      authorImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/F_Scott_Fitzgerald_1921.jpg/800px-F_Scott_Fitzgerald_1921.jpg',
      bookImage: 'https://m.media-amazon.com/images/I/81QuEGw8VPL._AC_UF1000,1000_QL80_.jpg',
      genre: 'Classic Literature',
      publisher: 'Charles Scribner\'s Sons',
      publishedDate: '1925',
      description: 'The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island.'
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      subtitle: 'A Novel',
      author: 'Harper Lee',
      authorImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Harper_Lee_Nov07.jpg/800px-Harper_Lee_Nov07.jpg',
      bookImage: 'https://odyssey.in/cdn/shop/products/the-great-gatsby-del-hb-edi-21573494341785_1024x.jpg?v=1621877482',
      genre: 'Classic Literature',
      publisher: 'J.B. Lippincott & Co.',
      publishedDate: '1960',
      description: 'The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it.'
    },

    // Добавете още книги, ако е необходимо
  ];


  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 ">
      <h2 className="text-3xl font-extrabold tracking-tight text-white">Book Catalog</h2>
      <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((book) => (
          <div key={book.id} className="bg-gray-900 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:-translate-y-1 hover:scale-105">
            <img
              src={book.bookImage}
              alt={`${book.title} cover`}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-white">{book.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{book.genre}</p>
              <Link
                to={`/books/${book._id}`}
                className="mt-4 inline-block text-orange-600 hover:text-orange-200 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
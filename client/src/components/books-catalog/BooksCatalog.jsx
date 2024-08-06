import { useEffect, useState } from 'react';

import * as BooksAPI from '../../api/books-api';


import BookCatalogCard from './book-catalog-card/BookCatalogCard';


export default function BookCatalog() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    (async () => {
      const result = await BooksAPI.getAll();
      setBooks(result);
    })()
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

      {books.length > 0
        ?<div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => <BookCatalogCard key={book._id} {...book} />)}
      </div>
      :<h2 className="text-2xl font-semibold text-center pt-64">No articles yet</h2>
      }
    </div>
  );
}
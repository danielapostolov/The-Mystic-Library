import React, { useEffect, useState } from 'react';

import booksAPI from '../../api/books-api';
import { useParams } from 'react-router-dom';

// import { FaHeart, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

export default function BookDetails() {
  const [book, setBook] = useState({});
  const { bookId } = useParams();

  useEffect(() => {
    (async () => {
      console.log(bookId);
      
      const result = await booksAPI.getOne(bookId);
      setBook(result);
    })();
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-900 shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex items-center">
          <img
            src={book.bookImage}
            alt={`${book.title} cover`}
            className="w-48 h-72 object-cover mr-6 rounded-lg shadow-lg"
          />
          <div>
            <h3 className="text-2xl leading-6 font-medium text-white">{book.title}</h3>
            <p className="mt-1 max-w-2xl text-lg text-gray-500">{book.genre}</p>
            {/* <div className="flex items-center mt-4">
              <button className="flex items-center text-gray-600 hover:text-gray-800 mr-4">
                <FaThumbsUp className="mr-1" />
                Like
              </button>
              <button className="flex items-center text-gray-600 hover:text-gray-800">
                <FaThumbsDown className="mr-1" />
                Dislike
              </button>
            </div> */}
          </div>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Author</dt>
              <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 flex items-center">
                <img
                  src={book.authorImage}
                  alt={`${book.author} photo`}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <span>{book.author}</span>
              </dd>
            </div>
            <div className="bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-t border-gray-200">
              <dt className="text-sm font-medium text-gray-500">Publisher</dt>
              <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">{book.publisher}</dd>
            </div>
            <div className="bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-t border-gray-200">
              <dt className="text-sm font-medium text-gray-500">Year</dt>
              <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">{book.year}</dd>
            </div>
            <div className="bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-t border-gray-200">
              <dt className="text-sm font-medium text-gray-500">Description</dt>
              <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">{book.description}</dd>
            </div>
          </dl>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-orange-600">Reviews</h3>
          {/* <div className="mt-2 space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="text-sm text-white">
                <p className="font-semibold text-gray-900">{review.reviewer}</p>
                <p>{review.text}</p>
              </div>
            ))}
          </div> */}
          <button className="mt-4 bg-orange-800 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-900">
            Add Review
          </button>
        </div>
        {/* <div className="px-4 py-5 sm:px-6 flex justify-end">
          <button className="text-indigo-500 hover:text-indigo-600">
            <FaHeart className="w-6 h-6" />
          </button>
        </div> */}
      </div>
    </div>

  );
};

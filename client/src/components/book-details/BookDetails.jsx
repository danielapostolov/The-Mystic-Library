import React, { useEffect, useState } from 'react';

import booksAPI from '../../api/books-api';
import { useParams } from 'react-router-dom';
import TextAreaComponent from '../text-area/TextAreaComponent';
import commentsApi from '../../api/comments-api';

// import { FaHeart, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

export default function BookDetails() {
    const [book, setBook] = useState({});
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');

    const { bookId } = useParams();

    useEffect(() => {
        (async () => {
            const result = await booksAPI.getOne(bookId);
            setBook(result);
        })();
    }, []);

    const commentSubmitHandler = async (e) => {
        e.preventDefault();

        const newComment = await commentsApi.create(bookId, username, comment);

        console.log(newComment);
        
        setBook(prevState => ({
            ...prevState,
            comments: {
                ...prevState.comments,
                [newComment.id]: newComment,
            }
        }));

        setUsername('');
        setComment('');

    }

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
                <div className="border-t border-gray-200 ">
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
                    <h3 className="text-lg leading-6 font-medium text-orange-600">Comments</h3>

                    <div className="mt-2 mb-4 space-y-4">

                        {Object.keys(book.comments || {}).length > 0
                            ? Object.values(book.comments).map((comment) => (
                                <div key={comment._id} className="text-sm text-white">
                                    <p className="font-semibold text-gray-900">{comment.username}:</p>
                                    <p>{comment.text}</p>
                                </div>


                            ))
                            : <p className='text-lg text-white'>No comments yet</p>
                        }

                    </div>
                    <div className='mt-1 pt-5 border-t border-gray-200'>
                        <form onSubmit={commentSubmitHandler}>
                            <h3 className="text-lg leading-6 font-medium text-orange-600 mb-4">Add new comment</h3>

                            <input
                                className='p-2 rounded-lg mb-3 bg-gray-700 '
                                type="text"
                                placeholder='username'
                                required
                                name='username'
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                            />

                            <TextAreaComponent
                                placeholder="Write your comment here..."
                                rows="1"
                                onChange={(e) => setComment(e.target.value)}
                                value={comment}
                            />

                            <button type='submit' className="mt-1 bg-orange-800 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-900">
                                Add comment
                            </button>
                        </form>
                    </div>


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

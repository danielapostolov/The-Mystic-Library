import { Link, useNavigate, useParams } from 'react-router-dom';

import { useGetOneBooks } from '../../hooks/useBooks'
import { useForm } from '../../hooks/useForm';
import { useGetAllComments, useCreateComment } from '../../hooks/useComments';

import TextAreaComponent from '../text-area/TextAreaComponent';
import { useAuthContext } from '../../contexts/AuthContext';
import booksAPI from '../../api/books-api';

const initialValues = {
    comment: ''
}

export default function BookDetails() {
    const navigate = useNavigate()
    const { bookId } = useParams();
    const [comments, dispatch] = useGetAllComments(bookId);
    const createComment = useCreateComment();
    const { email, userId } = useAuthContext();
    const [book] = useGetOneBooks(bookId);
    const { isAuthenticated } = useAuthContext();
    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(initialValues, async ({ comment }) => {
        try {
            const newComment = await createComment(bookId, comment);

            // await setComments(oldComments => [...oldComments, newComment]);
            dispatch({ type: 'ADD_COMMENT', payload: { ...newComment, author: { email } } })
        } catch (err) {
            console.log('Caught error on comment:', err.message);

        }
    });

    const bookDeleteHandler = async () => {
        const isConfirmed = confirm(`Are you sure you want to delete ${book.title} book?`);
        if (!isConfirmed) {
            return;
        }
        try {
            await booksAPI.remove(bookId)

            navigate('/');
        } catch (err) {
            console.log('Caught error on delete:', err.message);

        }

    }

    const isOwner = userId === book._ownerId;

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

                        {isOwner && (<p>
                            <Link to={`/books/${bookId}/edit`} >
                                <button type='submit' className="mt-1 bg-blue-800 text-white px-2 py-1 rounded-lg shadow hover:bg-blue-900">
                                    Edit
                                </button>
                            </Link>
                            <button type='submit' onClick={bookDeleteHandler} className="mt-6 ml-1 bg-red-800 text-white px-2 py-1 rounded-lg shadow hover:bg-red-900">
                                Delete
                            </button>
                        </p>)}

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

                        {comments?.map((comment) => (
                            <div key={comment._id} className="text-sm text-white">
                                <p className="font-semibold text-white">{comment.author.email}:</p>
                                <p>{comment.text}</p>
                            </div>


                        ))
                        }
                        {comments.length === 0 && <p className='text-lg text-white'>No comments yet</p>}

                    </div>
                    {isAuthenticated && (


                        < div className='mt-1 pt-5 border-t border-gray-200'>
                            <form onSubmit={submitHandler}>
                                <h3 className="text-lg leading-6 font-medium text-orange-600 mb-4">Add new comment</h3>


                                <TextAreaComponent
                                    placeholder="Write your comment here..."
                                    rows="1"
                                    onChange={changeHandler}
                                    value={values.comment}
                                    name="comment"
                                />

                                <button type='submit' className="mt-1 bg-orange-800 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-900">
                                    Add comment
                                </button>
                            </form>
                        </div>
                    )}

                </div>

            </div>
        </div >

    );
};

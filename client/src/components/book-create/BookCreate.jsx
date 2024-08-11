import { useCreateBooks } from "../../hooks/useBooks";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";

const initialValues = {
    title: '',
    author: '',
    genre: '',
    bookImage: '',
    authorImage: '',
    year: '',
    publisher: '',
    description: ''
}
export default function BookCreate() {
    const navigate = useNavigate();
    const createBook = useCreateBooks();

 

    const createHandler = async (values) => {

        console.log(values);
        
        try {
            const { _id: bookId } = await createBook(values);
            navigate(`/books/${bookId}/details`);
        } catch (err) {
            //TODO set error state and display error
            console.log(err.message);
            
        }

    }

    const { values, changeHandler, submitHandler } = useForm(initialValues, createHandler);


//TODO set placeholders
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                    Create Book
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={submitHandler}>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-white">
                                Title
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="title"
                                name="title"
                                type="title"
                                value={values.title}
                                onChange={changeHandler}
                                required
                                autoComplete="title"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                            Author
                        </label>
                        <div className="mt-2">
                            <input
                                id="author"
                                name="author"
                                type="author"
                                value={values.author}
                                onChange={changeHandler}
                                required
                                autoComplete="author"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                Genre
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="genre"
                                name="genre"
                                type="genre"
                                value={values.genre}
                                onChange={changeHandler}
                                required
                                autoComplete="genre"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                Book image
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="bookImage"
                                name="bookImage"
                                type="bookImage"
                                value={values.bookImage}
                                onChange={changeHandler}
                                required
                                autoComplete="bookImage"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                Author image
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="authorImage"
                                name="authorImage"
                                type="authorImage"
                                value={values.authorImage}
                                onChange={changeHandler}
                                required
                                autoComplete="authorImage"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>


                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                Year
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="year"
                                name="year"
                                type="year"
                                value={values.year}
                                onChange={changeHandler}
                                required
                                autoComplete="year"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                Publisher
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="publisher"
                                name="publisher"
                                type="publisher"
                                value={values.publisher}
                                onChange={changeHandler}
                                required
                                autoComplete="publisher"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>


                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                Description
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="description"
                                name="description"
                                type="description"
                                value={values.description}
                                onChange={changeHandler}
                                required
                                autoComplete="description"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-orange-800  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
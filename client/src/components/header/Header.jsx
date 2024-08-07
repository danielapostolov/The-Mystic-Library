import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'

export default function Example() {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <header className="">
            <nav aria-label="Global" className=" mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">

                {/* <------> Logo <-----> */}
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className=" text-lg float-right font-bold ps-2 pt-0 text-white">The Mystic Library</span>
                        <img alt="Logo" src="https://i.postimg.cc/N0Q0bhLP/logo.png" className="h-8 w-auto" />
                    </Link>
                </div>


                <div className="hidden lg:flex lg:gap-x-12">


                    <Link to="/" className="text-sm font-semibold hover:text-orange-600 leading-6 text-white">
                        Home
                    </Link>
                    <Link to="/books" className="text-sm font-semibold hover:text-orange-600 leading-6 text-white">
                        Catalog
                    </Link>
                    <Link to="/about" className="text-sm font-semibold hover:text-orange-600 leading-6 text-white">
                        About us
                    </Link>

                    {isAuthenticated

                        && <Link to="/book/create" className="text-sm font-semibold hover:text-orange-600 leading-6 text-white">
                            Create book
                        </Link>
                    }

                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-4">

                    {isAuthenticated

                        && < Link to="/" className="rounded-md px-1 py-0.5 hover:bg-orange-900 text-sm font-semibold leading-6 text-white bg-orange-800">
                            Log out
                        </Link>
                    }


                    {!isAuthenticated
                        && < Link to="/login" className="text-sm font-semibold hover:text-orange-600 leading-6 text-white ">
                            Log in
                        </Link>
                    }

                    {!isAuthenticated
                        && <Link to="/sign-up" className="rounded-md px-1 py-0.5 hover:bg-orange-900 text-sm font-semibold leading-6 text-white bg-orange-800">
                            Sign up
                        </Link>
                    }



                </div>
            </nav>

        </header >
    )
}
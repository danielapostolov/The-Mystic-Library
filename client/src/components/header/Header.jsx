import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Example() {

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


                    <Link to="/" className="text-sm font-semibold hover:text-orange-700 leading-6 text-white">
                        Home
                    </Link>
                    <Link to="/catalog" className="text-sm font-semibold hover:text-orange-700 leading-6 text-white">
                        Catalog
                    </Link>
                    <Link to="/about" className="text-sm font-semibold hover:text-orange-700 leading-6 text-white">
                        About us
                    </Link>
                    <Link to="/" className="text-sm font-semibold hover:text-orange-700 leading-6 text-white">
                        Create book
                    </Link>
                    
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-4">
                    <Link to="/" className="rounded-md  hover:bg-orange-900 text-sm font-semibold leading-6 text-white bg-orange-800">
                        Log out
                    </Link>

                    <Link to="/login" className="text-sm font-semibold hover:text-orange-700 leading-6 text-white ">
                        Log in
                    </Link>

                    <Link to="/sign-up" className="rounded-md  hover:bg-orange-900 text-sm font-semibold leading-6 text-white bg-orange-800">
                        Sign up
                    </Link>
                </div>
            </nav>

        </header>
    )
}
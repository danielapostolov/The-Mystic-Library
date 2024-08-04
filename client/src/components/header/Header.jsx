import { useState } from 'react'

export default function Example() {

    return (
        <header className="bg-gray-900">
            <nav aria-label="Global" className=" mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">

                {/* <------> Logo <-----> */}
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className=" text-lg float-right font-bold ps-2 pt-0 text-white">The Mystic Library</span>
                        <img alt="Logo" src="https://i.postimg.cc/N0Q0bhLP/logo.png" className="h-8 w-auto" />
                    </a>
                </div>


                <div className="hidden lg:flex lg:gap-x-12">


                    <a href="/" className="text-sm font-semibold hover:text-blue-800 leading-6 text-white">
                        Home
                    </a>
                    <a href="#" className="text-sm font-semibold hover:text-blue-800 leading-6 text-white">
                        Catalog
                    </a>
                    <a href="#" className="text-sm font-semibold hover:text-blue-800 leading-6 text-white">
                        About us
                    </a>
                    <a href="#" className="text-sm font-semibold hover:text-blue-800 leading-6 text-white">
                        Create book
                    </a>
                    <a href="#" className="text-sm font-semibold hover:text-blue-800 leading-6 text-white">
                        Company
                    </a>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-4">
                    <a href="/register" className="text-sm font-semibold leading-6 text-white ">
                        Log in
                    </a>

                    <a href="/login" className="rounded-md  text-sm font-semibold leading-6 text-white bg-blue-700">
                        Sign up 
                    </a>
                </div>
            </nav>

        </header>
    )
}
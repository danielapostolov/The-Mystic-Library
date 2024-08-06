import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (<>


        <div className="">
            <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="relative isolate overflow-hidden bg-gradient-to-r from-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                    <svg
                        viewBox="0 0 1024 1024"
                        aria-hidden="true"
                        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                    >
                        <circle r={512} cx={512} cy={512} fill="DarkOrange" fillOpacity="0.7" />
                        <defs>
                            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                <stop stopColor="#7775D6" />
                                <stop offset={1} stopColor="#E935C1" />
                            </radialGradient>
                        </defs>
                    </svg>
                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Explore the infinity of books and gain knowledge
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300 italic">
                            "Show me a family of readers, and I will show you the people who move the world."
                        </p>
                        <span className='text-lg text-white'>– Napoleon Bonaparte</span>
                        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            <Link
                                to="/books"
                                className="rounded-md bg-orange-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Explore
                            </Link>
                            <Link to="/about" className="text-sm font-semibold hover:text-orange-700 leading-6 text-white">
                                About us <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                    <div className="relative mt-16 h-80 lg:mt-8">
                        <p className='text-2xl text-justify italic text-orange-800 absolute pt-20  ps-40 mt-10'>Welcome!</p>
                        <img
                            className='mb-3'
                            alt="App screenshot"
                            src="https://i.postimg.cc/mZjcty2G/dwarf-image.png"
                            width={1828}
                            height={1080}
                        />

                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
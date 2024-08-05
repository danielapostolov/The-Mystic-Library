export default function About() {
    return (
        <div className="sm:flex items-center max-w-screen-xl">
            <div className="sm:w-1/2 p-10">
                <div className="image object-center text-center">
                    <img src="https://i.imgur.com/WbQnbas.png" />
                </div>
            </div>
            <div className="sm:w-1/2 p-5">
                <div className="text">
                    <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
                        About <span className="text-orange-600">Us</span>
                    </h2>
                    <p className="text-white">
                        We are the best online book library on the Internet.<br /> Our library provides the the largest collection of online books on the Internet
 
                    </p>
                </div>
            </div>
        </div>

    );
}
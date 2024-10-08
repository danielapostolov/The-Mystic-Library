import { Link } from 'react-router-dom'
import NewBadge from '../../../new-badge/NewBadge';


export default function HomeBookCard({
    _id,
    bookImage,
    title,
    genre
}) {
    return (

        <div className="bg-gray-900 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:-translate-y-1 hover:scale-105">
            <img
                src={bookImage}
                alt={`${title} cover`}
                className="w-full h-60 object-fit"
            />
            <div className="p-4">
                <h3 className="text-lg font-medium text-white">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">{genre}</p>
                <Link
                    to={`/books/${_id}/details`}
                    className="mt-4 inline-block text-orange-600 hover:text-orange-200 transition-colors"
                >
                    View Details
                </Link>

                <div className="absolute top-2 right-2">
                    <NewBadge />
                  </div>
            </div>
        </div>
    );
}
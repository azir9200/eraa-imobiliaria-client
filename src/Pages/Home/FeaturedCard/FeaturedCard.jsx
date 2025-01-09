import { Link } from "react-router-dom";

const FeaturedCard = ({ house }) => {
  const { _id, image, property_location, price_range, verification_status } =
    house;

  return (
    <div className="card max-w-screen-lg bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
      {/* Image Section */}

      <figure className="relative">
        <img src={image} alt="House" className="w-full h-72 object-cover" />
        <p className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-4 py-2 rounded-lg text-lg">
          Price: {price_range}
        </p>
      </figure>

      {/* Card Content */}
      <div className="p-6 lg:flex justify-between">
        <div>
          <p className="text-lg font-bold text-emerald-600">
            Property Location: {property_location}
          </p>
          <p className="text-gray-600 mt-2">
            Verification Status:{" "}
            <span
              className={`font-semibold ${
                verification_status === "Verified"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {verification_status}
            </span>
          </p>
        </div>

        {/* Button Section */}
        <div className="mt-6 flex justify-center lg:justify-start">
          <Link to={`/houseDetails/${_id}`}>
            <button className="flex items-center gap-2 bg-emerald-600 font-semibold text-white text-xl px-4 py-2 rounded-lg hover:bg-teal-950 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Show Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;

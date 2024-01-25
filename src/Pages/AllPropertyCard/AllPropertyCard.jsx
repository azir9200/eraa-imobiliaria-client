import { Link } from "react-router-dom";


const AllPropertyCard = ({ houses }) => {

const { _id, image, property_location, price_range, verification_status } = houses;

  return (
    <div>
      <div className="m-8" >
        <div className="  shadow-xl">
          <div className="relative overflow-hidden aspect-w-1 aspect-h-1 ">
            <img src={image} alt="image" className="rounded object-cover sm:w-56 md:w-96 lg:w-full h-96 mt-4 " />
            <p className="absolute bottom-2 left-2 p-2 mr-2 bg-slate-500 text-xl rounded text-white">Price: {price_range}</p>
          </div>

          <div className=" flex justify-between items-center">
            <div className="ml-4" >
              <p className="text-start font-semibold " >Property Location: {property_location} </p>
              <p className="text-  " > Verification_status:{verification_status}</p>
            </div>
            <div className="" >
              <Link to={`/houseDetails/${_id} `} >
                <button className="btn bg-slate-200 mr-4 ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                  Show Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AllPropertyCard;
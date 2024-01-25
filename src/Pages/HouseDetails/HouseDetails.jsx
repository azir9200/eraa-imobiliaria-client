import { useContext } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../Components/Hocks/UseExiosecure/UseAxiosSecure";
import useWishlist from "../../Components/Hocks/useWishlist/useWishlist";
import useHouses from "../../Components/Hocks/AllHouses";



const HouseDetails = () => {
   const allHouses = useLoaderData()
  // const [ allHouses ] = useHouses();

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = UseAxiosSecure()
  const [, refetch] = useWishlist();

  const { _id, image, property_name, property_title, property_location, price_range, sq_ft, bedrooms, bathrooms, swimming_pool, agent_name, verification_status, description, agent_image } = allHouses;
console.log(description)
  const handleAddtoWishlist = () => {
    if (user && user.email) {

      //sending item to database
      const wishList = {
        houseId: _id,
        email: user.email,
        name: user.name,
        image, property_name, property_title, property_location, price_range, sq_ft, bedrooms, bathrooms, swimming_pool, agent_name, verification_status, description, agent_image

      }
      axiosSecure.post('/wishList', wishList)
        .then(res => {
          console.log(res.data)
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "success, added to Wishlist !",
              showConfirmButton: false,
              timer: 1500
            });
            //refetch the wish list
            refetch();
          }
        })
    }
    else {
      Swal.fire({
        title: "You are not logged  in !",
        text: "Please login to add your wishlist!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, LOGIN!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/userLogin', { state: { from: location } })
        }
      });
    }
  }

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">

        <figure className="w-3/5" ><img src={image} alt="Album" className="max-h[600px]  " /></figure>

        <div className="card-body m-8 border border-gray-500 lg:w-2/5 w-full">
          <div>
            <h2 className="text-xl" >Property Name:   {property_name} </h2>
            <h2 className="text-xl" >Property Title: {property_title} </h2>
            <h2 className="text-xl">Location: {property_location} </h2>
            <p className="text-xl" >Price: {price_range} </p>
            <p className="text-xl" >Varification_Status:  {verification_status} </p>
          </div>
          <div className="md:flex border border-y-2 " >
            <div className="w-1/2" >
              <h2 className="text-xl font-semibold" >About House  </h2>
              <p> Area : {sq_ft} </p>
              <p>Bedrooms  :    {bedrooms} </p>
              <p>Bathrooms: {bathrooms}   </p>
              <p> Swimming Pool: {swimming_pool} </p>
            </div>

            <div className="w-1/2" >
              <img src={agent_image} alt="image" className="w-28 rounded-full" />
              <h3>Agent: {agent_name} </h3>
            </div>
          </div>
          <p className="font-semibold" >Description:  {description} </p>

          <div className="flex gap-3 " >
            <button onClick={handleAddtoWishlist} className="btn btn-outline btn-primary">Add to Wishlist</button>

            {/* modal  is here */}
            
            <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>Add Review</button>
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box w-11/12 max-w-6xl">
          
                <div>
                <form  className="max-w-md mx-auto mt-8">
      <label htmlFor="review" className="block text-xl text-center font-medium text-gray-700">
        Write a Review
      </label>

            <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input type="text"  name="name" placeholder="Name" className="input input-bordered" />               
              </div>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input type="email"  name="email" placeholder="Your Email " className="input input-bordered" />               
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name="photoURL" placeholder="photo URL" className="input input-bordered" />
                
              </div>
              <label className="label">
                  <span className="label-text">Your Comment</span>
                </label>
      <textarea
        id="review"
        name="review"
        rows="6"
       
        onChange={(e) =>(e.target.value)}
        className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
      ></textarea>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Submit Review
      </button>
    </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default HouseDetails;


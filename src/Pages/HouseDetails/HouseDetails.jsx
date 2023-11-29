import { useContext } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../Components/Hocks/UseExiosecure/UseAxiosSecure";
import useWishlist from "../../Components/Hocks/useWishlist/useWishlist";


const HouseDetails = () => {
  const houses = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = UseAxiosSecure()
  const [, refetch] = useWishlist();

  const { _id, image, property_name, property_title, property_location, price_range, sq_ft, bedrooms, bathrooms, swimming_pool, agent_name, verification_status, description, agent_image } = houses;

  const handleAddtoWishlist = () => {
    if (user && user.email) {

      //sending item to database
      const wishList = {
        houseId: _id,
        email: user.email,
        name: user.name,
        image,
        price_range,
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

        <div className="card-body w-2/5 ">
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
            {/* <button className="btn btn-outline btn-secondary">Secondary</button> */}
            <button className="btn btn-outline btn-accent">Review</button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-4xl text-center mt-8" >Reviews from our customer.</h2>
      </div>
    </div>
  );
};

export default HouseDetails;
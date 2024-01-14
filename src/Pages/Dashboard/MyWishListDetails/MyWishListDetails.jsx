import Swal from "sweetalert2";
import UseAxiosSecure from "../../../Components/Hocks/UseExiosecure/UseAxiosSecure";
import useWishlist from "../../../Components/Hocks/useWishlist/useWishlist";
import { Link } from "react-router-dom";


const MyWishListDetails = ({ details, refetch }) => {
  // const [refetch] = useWishlist();
  const { _id, image, property_name, property_title, property_location, price_range, sq_ft, bedrooms, bathrooms, swimming_pool, agent_name, verification_status, description } = details;

  const axiosSecure = UseAxiosSecure();

  const handelRemoveWishList = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        axiosSecure.delete(`/wishList/${_id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          })
      }
    });
  }
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">

        <figure className="w-3/5" ><img src={image} alt="Album" className="max-h[600px]  " /></figure>

        <div className="card-body  ">
          <div>
            <h2 className="text-xl" >Property Name:   {property_name} </h2>
            <h2 className="text-xl" >Property Title: {property_title} </h2>
            <h2 className="text-xl">Location: {property_location} </h2>
            <p className="text-xl" >Price: {price_range} </p>
            <p className="text-xl" >Varification_Status:  {verification_status} </p>
          </div>
          <div className=" border border-y-2 " >
            <div className="w-1/2" >
              <h2 className="text-xl font-semibold" >About House  </h2>
              <p> Area : {sq_ft} </p>
              <p>Bedrooms  :    {bedrooms} </p>
              <p>Bathrooms: {bathrooms}   </p>
              <p> Swimming Pool: {swimming_pool} </p>
            </div>

            <div className="w-1/2" >
              {/* <img src={agent_image} alt="image" className="w-28 rounded-full" /> */}
              <h3>Agent: {agent_name} </h3>
            </div>
          </div>
          <p className="font-semibold" >Description:  {description} </p>

          <div className="flex gap-3 " >
            <Link to='/makeOffer' >
              <button className="btn btn-outline btn-primary">Make an Offer</button>
            </Link>


            <button onClick={() => handelRemoveWishList(_id)} className="btn btn-outline btn-warning">Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWishListDetails;
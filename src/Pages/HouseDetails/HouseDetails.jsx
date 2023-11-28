import { useLoaderData } from "react-router-dom";


const HouseDetails = () => {

  const houses = useLoaderData();
  console.log(houses);
  // const { price_range, _id } = houses;
  const { _id, image, property_name, property_title, property_location, price_range, sq_ft, bedrooms, bathrooms, swimming_pool, agent_name, verification_status, description, agent_image } = houses;

  console.log(houses.price_range);

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
            <button className="btn btn-outline btn-primary">Add to Wishlist</button>
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
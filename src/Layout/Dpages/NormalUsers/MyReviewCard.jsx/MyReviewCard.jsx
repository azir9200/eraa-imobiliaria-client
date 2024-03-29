

const MyReviewCard = ({ review }) => {
  const { property_title, reviewer_image, agent_name, review_description } = review;
  return (
    <div className="mx-auto " >
      <div className=" sm:w-48 md:w-96 mb-4 p-6 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={reviewer_image} alt="image" className="rounded-md h-36 object-cover w-36 " />
        </figure>
        <p className="text-end" >--{agent_name} </p>
        <div className="">

          <h2 className=" text-left ">{property_title} </h2>
          <p className="text-xl italic font-bold " >"---{review_description}"</p>
        </div>
      </div>
    </div>
  );
};
export default MyReviewCard;

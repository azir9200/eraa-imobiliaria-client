import { useEffect, useState } from "react";
import Review from "../Review/Review";




const Reviews = () => {
  const [allreviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('reviews.json')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])

  const reviews = allreviews.slice(0, 5);



  return (
    <div className="border" >
      <h2 className="text-4xl text-center mt-8" >Feedback from our customer.</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  " >
        {

          reviews.map(review => <Review key={review.id} review={review} > </Review>
          )
        }

      </div>

    </div>
  );
};

export default Reviews;
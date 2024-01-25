import { useEffect, useState } from "react";
import MyReviewCard from "../MyReviewCard.jsx/MyReviewCard";

const MyReview = () => {
  const [allReviews, setReviews] = useState([]);
  useEffect
  (() => {
    fetch('https://eraa-imobiliria-server.vercel.app/reviews')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])

  const reviews = allReviews.slice(0, 1);

  return (
    <div className="border  mx-auto justify-center" >
      <h2 className="text-4xl text-center mt-8" >Feedback from our customer .</h2>

      <div className="text-center items-center flex border " >
        {
          reviews.map(review => <MyReviewCard key={review.id} review={review}></MyReviewCard>
                 
          )
        }

      </div>

    </div>
  );
};

export default MyReview;
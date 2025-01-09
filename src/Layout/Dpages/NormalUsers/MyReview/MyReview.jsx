import { useEffect, useState } from "react";
import MyReviewCard from "../MyReviewCard.jsx/MyReviewCard";

const MyReview = () => {
  const [allReviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://eraa-imobiliria-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Failed to fetch reviews:", err));
  }, []);

  const reviews = allReviews.slice(0, 2);

  return (
    <div className="mx-auto mt-12 p-8 bg-gray-100 rounded-lg shadow-md max-w-4xl">
      <h2 className="text-4xl font-bold text-center text-emerald-600 mb-6">
        Feedback from Our Customers
      </h2>

      {/* <div className="text-center items-center flex border ">
        {reviews.map((review) => (
          <MyReviewCard key={review.id} review={review}></MyReviewCard>
        ))}
      </div> */}

      {reviews.length > 0 ? (
        <div className="flex justify-center">
          {reviews.map((review) => (
            <MyReviewCard key={review.id} review={review} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No reviews available at the moment.
        </p>
      )}
    </div>
  );
};

export default MyReview;

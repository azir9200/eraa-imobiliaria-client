import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('reviews.json')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])



  return (
    <div>
      <h2>reviews</h2>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

        {
          reviews.map(review => <SwiperSlide
            key={review.id}>

            <div className="m-24" >

              <Rating
                className=' flex justify-center items-center '
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />

              <p>{review.agent_name} </p>
              <p> <img src={review.reviewer_image} alt="" /> </p>
              <p>{review.property_title} </p>
              <p>{review.review_description} </p>
            </div>
          </SwiperSlide>)
        }

      </Swiper>

    </div>
  );
};

export default Reviews;